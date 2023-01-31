import { SectionStyled } from "../styles/HomeStyled";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import api from "../services/Api";
import { Buttons } from "../components/Button";
import Loading from "../components/Loader";

export function Home() {
  const [people, setPeople] = useState([]);
  const [peopleInfo, setPeopleInfo] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadPeople(1);
  }, []);

  async function loadPeople(page) {
    async function fetchPeople() {
      let response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
      let data = await response.json();
      setPage(page);
      setPeopleInfo(data);
      setPeople(data.results)
      setTimeout(setLoading(true), 1000);
    }
    fetchPeople();
  }

  function prevPage() {
    loadPeople(page - 1);
  }

  function nextPage() {
    loadPeople(page + 1);
  }

  return (
    <>
      <SectionStyled>
        {!loading ? <Loading/> : 
          people.map((p, index) => (
           
              <Card
                key={index}
                Personagem={p.name}
                id={`/people/${p.url.substring(29, 31)}`}
                text={'Detalhes'}
              />
          
          ))}
      </SectionStyled>
      <div className="actions">
        <Buttons text={`<`} disabled={peopleInfo.previous === null}  onClick={prevPage}/>
        <Buttons text={`>`} disabled={peopleInfo.next === null}  onClick={nextPage} />
      </div>
    </>
  );
}
