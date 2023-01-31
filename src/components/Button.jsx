import { ButtonStyled } from "../styles/ButtonStyled";


export function Buttons({text, onClick,disabled}) {
  return (
    <ButtonStyled>
        <button onClick={onClick} disabled={disabled}>{text}</button>
    </ButtonStyled>
  );
}
