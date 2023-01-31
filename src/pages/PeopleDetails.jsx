import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardDetails } from "../components/CardDetails";
import Loading from "../components/Loader";

export function People({ people }) {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchURL = "https://swapi.dev/api/people/";

  const getPersona = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setPersona(data);
    setLoading(true);
  };

  useEffect(() => {
    const getPersonaURL = `${searchURL}${id}`;
    getPersona(getPersonaURL);
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        persona && (
          <CardDetails
            Personagem={persona.name}
            height={persona.height}
            mass={persona.mass}
            genero={persona.gender}
            cor={persona.skin_color}
            olhos={persona.eye_color}
            aniversario={persona.birth_year}
            hair={persona.hair_color}
            planeta={persona.homeworld.substring(30, 31)}
            text={"Voltar"}
            id={"/"}
          />
        )
      )}
    </>
  );
}
