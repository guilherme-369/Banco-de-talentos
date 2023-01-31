import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid var(--color-yellow);
  border-right: 2px solid var(--color-yellow);
  border-bottom: 2px solid var(--color-yellow);
  border-left: 4px solid var(--color-black);
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Container = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
