import styled from "styled-components";
import lavander from "./assets/3.png";
import leaf from "../FirstBlock/assets/leaf.png";
import lavanderTop from "../FirstBlock/assets/lavander-top.png";
import bg from "./assets/12.jpeg";

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

export const Bg = styled.div`
  transform: rotate(90deg);
  background-image: url(${lavander});
  background-size: 200px;
  height: 200px;
  width: 200px;
  background-repeat: no-repeat;
  z-index: 1;
`;

export const Bg2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${leaf});
  background-size: 600px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.1;

  @media (max-width: 680px) {
    background-size: 400px;
    height: 400px;
    width: 400px;
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

export const Btn = styled.button`
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  text-decoration: none;
  background-color: #c3a3bf;
  border-radius: 10px;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "exo";
  font-size: 22px;
  font-weight: 500;
  height: 42px;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 30px 0 80px;

  :hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }

  @media (min-width: 768px) {
    padding: 0 2.6rem;
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

export const BottomImage = styled.div`
  background-image: url(${bg});
  position: absolute;
  bottom: 0;
  background-size: 100%;
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  opacity: 0.6;

  @media (max-width: 680px) {
    height: 240px;
  }
`;
