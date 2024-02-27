import styled from "styled-components";
import bg from "./assets/bg.png";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  gap: 32px;
  justify-content: center;
  background-position: bottom;
  background-size: 100%;
  height: 600px;
`;

export const Names = styled.div`
  font-family: "czizh";
  font-size: 36px;
  text-align: center;
`;

export const Text = styled.div`
  font-family: "miama";
  font-size: 48px;
  text-align: center;
`;

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Numbers = styled.div`
  align-items: center;
  color: black;
  font-family: "montserrat";
  display: flex;
  flex-direction: column;
  font-size: 42px;
  height: 100%;
  justify-content: center;
  gap: 4px;
  width: 80px;

  span {
    font-size: 12px;
  }
`;
