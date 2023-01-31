import { CardStyled } from "../styles/CardStyled";
import { Link } from "react-router-dom";
export function Card({ Personagem, id, text }) {
  return (
    <>
      <CardStyled>
        <div className="div-nome">
          <h1>{Personagem}</h1>
          <Link className="text-link" to={`${id}`}>
            <div className="btn-persona">{text}</div>
          </Link>
        </div>
      </CardStyled>
    </>
  );
}
