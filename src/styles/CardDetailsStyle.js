import styled from "styled-components";

export const CardStyledDetails = styled.div`
  width: 30rem;
  margin: 0 auto;
  border: 2px solid var(--color-yellow);

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .div-details {
    display: flex;
    flex-direction: column;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    padding: 1rem;
    gap: 1rem;

    p {
      display: flex;
      justify-content: space-between;
      color: var(--color-yellow);
      font-size: large;
    }

    span {
      color: var(--color-black);
    }
  }

  @media screen and (max-width: 515px) {
    width: 20rem;
  }
  @media screen and (max-width: 280px) {
    width: 15rem;
    .div-details {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  .btn-persona {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-yellow);
    background-color: var(--color-yellow);
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1.3rem;
    margin-right: 1.3rem;
    padding: 0.8rem;
    cursor: pointer;
    color: var(--color-black);
    .btn-back {
      padding: 1rem;
    }
    :hover {
      background-color: white;
    }

    .text-link {
      text-decoration: none;
      color: var(--color-black);
    }
  }
`;
