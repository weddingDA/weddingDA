import styled from "styled-components";

import bg from "./assets/bg.png";

export const Container = styled.div`
  padding: 80px 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 680px) {
    padding: 20px 0 80px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "miama";
  width: 350px;
  z-index: 2;
`;

export const Title = styled.p`
  font-size: 74px;
  font-family: "czizh";
  line-height: 52px;
  color: black;
  text-align: center;
  opacity: 0;

  animation: aniTB1 1.5s forwards;
  animation-duration: 2s;
  @keyframes aniTB1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 680px) {
    font-size: 42px;
    line-height: 52px;
  }
`;

export const Text = styled.p`
  font-family: "czizh";
  color: black;
  font-size: 22px;
  line-height: 1;
  font-weight: 400;
  opacity: 0;
  animation: anText1 3s forwards;
  text-align: center;
  position: relative;

  @keyframes anText1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    font-family: "oranienbaum";
    color: white;
    font-size: 32px;
  }
`;

export const Numbers = styled.div`
  align-items: center;
  color: black;
  color: white;
  font-family: "oranienbaum";
  display: flex;
  flex-direction: column;
  font-size: 64px;
  height: 100%;
  justify-content: center;
  gap: 8px;
  width: 80px;

  span {
    font-size: 24px;
  }

  @media (max-width: 680px) {
    font-size: 44px;

    span {
      font-size: 14px;
    }
  }
`;

export const DatesBeforeWedding = styled.div`
  display: flex;
  margin: 32px 0 0;
  padding-bottom: 120px;
  gap: 20px;
  height: 200px;

  @media (max-width: 680px) {
    height: auto;
    padding-bottom: 0;
    gap: 8px;
  }
`;

export const Images = styled.div`
  height: 120px;
  width: 100%;
`;

export const Bg = styled.div`
  position: absolute;
  bottom: 0;
  background-image: url(${bg});
  transform: scaleY(-1);
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;
