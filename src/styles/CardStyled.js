import styled from "styled-components";

export const CardStyled = styled.div`
  border: 2px solid var(--color-yellow);
  margin-bottom: 2rem;
  width: 30rem;

  .div-nome {
    padding: 0.5rem;
    color: var(--color-black);
  }
  .btn-persona {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-yellow);
    background-color: var(--color-yellow);
    margin-top: 1rem;
    padding: 0.8rem;
    cursor: pointer;
    color: var(--color-black);
    :hover {
      background-color: var(--color-white);
    }

    .text-link {
      text-decoration: none;
      color: var(--color-black);
    }
  }
`;
