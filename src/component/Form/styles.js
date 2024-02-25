import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px 0;
  width: 537px;
  align-items: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  iframe {
    background-color: white;
    border-radius: 12px;
    padding-bottom: 22px;
  }

  @media (max-width: 680px) {
    width: 370px;
  }
`;

export const CheckOnIt = styled.div`
  display: flex;
  gap: 10px;

  p {
    margin: 0;
  }
`;

export const NameCont = styled.input`
  background-color: transparent;
  border: unset;
  border-bottom: 1px solid #dcebfa;
  padding: 20px 0;
`;

export const Checkbox = styled.input`
  background-color: transparent;
  border: 1px solid #dcebfa;
  padding: 5px;
`;
