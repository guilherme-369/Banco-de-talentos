import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import Loading from "../components/Loader";
import { SearchStyled } from "../styles/SearchStyled";

export function Search() {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [persona, setPersona] = useState([]);
  const query = searchParams.get("q");
  const searchPeopleURL = "https://swapi.dev/api/people/";

  const searchPersona = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPersona(data.results);
  };

  useEffect(() => {
    const searchPersonaURL = `${searchPeopleURL}/?search=${query}`;
    searchPersona(searchPersonaURL);
    setLoading(true);
  }, [query]);

  return (
    <SearchStyled>
      <div className="div-title">
        <h1>
          Resultados para: <span>{query}</span>
        </h1>
      </div>
      {!loading ? (
        <Loading />
      ) : (
        persona.map((p, index) => (
          <div className="div-card">
            <Card
              key={index}
              Personagem={p.name}
              id={`/people/${p.url.substring(29, 31)}`}
              text={"Detalhes"}
            />
          </div>
        ))
      )}
    </SearchStyled>
  );
}
