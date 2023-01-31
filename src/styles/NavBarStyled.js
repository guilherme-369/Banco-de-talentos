import styled from "styled-components";
import background from "../assets/bg-star-wars.png";

export const NavBarStyled = styled.header`
  width: 100%;
  height: 40%;
  min-height: 8rem;
  background-image: url(${background});
  background-size: auto;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3rem;
  button{
    background-color: transparent;
  }
  @media screen and (max-width: 515px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Logo = styled.div`
  img {
    height: 4.5rem;
  }
`;

export const Input = styled.div`
  display: flex;
  border-radius: 3rem;
  padding: 0.5rem;
  background-color: var(--color-white);
  form{
    display: flex;
    align-items: center;
  }
  input {
    border: none;
    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
  svg{
    :hover{
        cursor: pointer;
    }
  }
  @media screen and (max-width: 515px) {
    margin-top: 1rem;
  }
`;
