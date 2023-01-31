import { Link } from "react-router-dom";
import { CardStyledDetails } from "../styles/CardDetailsStyle";
export function CardDetails({
  Personagem,
  id,
  text,
  height,
  mass,
  genero,
  hair,
  cor,
  olhos,
  aniversario,
  planeta,
}) {
  return (
    <>
      <CardStyledDetails>
        <div className="container">
          <div className="div-name">
            <h1>{Personagem}</h1>
          </div>
          <div className="div-details">
            <p>
              Altura: <span>{height} cm</span>
            </p>
            <p>
              Peso: <span>{mass} kg</span>
            </p>
            <p>
              Genero: <span>{genero}</span>
            </p>
            <p>
              Cabelo: <span>{hair}</span>
            </p>
            <p>
              Cor: <span>{cor}</span>
            </p>
            <p>
              Olhos: <span>{olhos}</span>
            </p>
            <p>
              Aniversario: <span>{aniversario}</span>
            </p>
            <p>
              Planeta: <span>{planeta}</span>
            </p>
          </div>
          <div className="btn-back">
            <Link className="text-link" to={`${id}`}>
              <div className="btn-persona">{text}</div>
            </Link>
          </div>
        </div>
      </CardStyledDetails>
    </>
  );
}
