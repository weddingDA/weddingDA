import styled from "styled-components";
import lavanderTop from "../FirstBlock/assets/lavander-top.png";
import leaf from "../FirstBlock/assets/leaf.png";
import Datetime from "./assets/25.png";
import bg from "./assets/bg.png";

export const Container = styled.div`
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 680px) {
    padding: 20px 0 80px;
    background-size: auto;
  }
`;

export const Bg = styled.div`
  position: absolute;
  top: -120px;
  left: 0;
  background-image: url(${lavanderTop});
  background-size: 600px;
  height: 800px;
  width: 800px;
  background-repeat: no-repeat;
  opacity: 0.1;
  transform: rotate(337deg);

  @media (max-width: 680px) {
    left: -100px;
    background-size: 400px;
    height: 400px;
    width: 400px;
  }
`;

export const Bg2 = styled.div`
  position: absolute;
  bottom: 200px;
  right: 0;
  background-image: url(${leaf});
  background-size: 600px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.1;

  @media (max-width: 680px) {
    right: -100px;
    background-size: 400px;
    height: 400px;
    width: 400px;
  }
`;

export const Info = styled.div`
  font-family: "miama";
  width: 350px;
`;

export const Title = styled.p`
  font-size: 42px;
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
`;

export const Text = styled.p`
  font-family: "czizh";
  font-size: 24px;
  font-weight: 400;
  color: black;
  text-align: center;
  opacity: 0.8;
  animation: aniTB1 3s forwards;

  b {
    font-size: 32px;
  }
`;

export const Date = styled.p`
  font-family: "miama";
  font-size: 22px;
  font-weight: 400;
  color: black;
  text-align: center;
  animation: aniTB1 3s forwards;
`;

export const Month = styled.p`
  font-size: 32px;
  color: black;
  text-align: center;
  margin: 42px 0 0;
  animation: aniTB1 3s forwards;
`;

export const Calendar = styled.div`
  position: relative;
  background-image: url(${Datetime});
  background-size: cover;
  background-repeat: no-repeat;
  height: 230px;
  width: 350px;
  animation: aniTB1 3s forwards;
  animation-delay: 1s;
  opacity: 0;

  svg {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 82px;
    right: 72px;

    animation: aniHeart 3s infinite;

    @keyframes aniHeart {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export const CalSceleton = styled.div`
  height: 350px;
  width: 350px;
`;
