import styled from "styled-components";
import lavanderTop from "../FirstBlock/assets/lavander-top.png";
import leaf from "../FirstBlock/assets/leaf.png";
import b11 from "./assets/b11.jpg";

export const Brash = styled.div`
  right: 8px;
  bottom: -61px;
  transform: rotate(-17deg);
  opacity: 0.6;
  background-size: contain;
  background-repeat: no-repeat;
  width: 180px;
  height: 105px;
  position: absolute;
  background-image: url(${b11});
  z-index: -1;
`;

export const Container = styled.div`
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 680px) {
    padding: 20px 0 80px;
  }
`;

export const Bg = styled.div`
  transform: rotate(203deg);
  bottom: 87px;
  position: absolute;
  right: calc(50% - 342px);
  background-image: url(${lavanderTop});
  background-size: 400px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.8;
  z-index: 1;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const Bg2 = styled.div`
  position: absolute;
  top: 0;
  left: 280px;
  background-image: url(${leaf});
  background-size: 400px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.1;
  -webkit-animation: spin 36s linear infinite;
  -moz-animation: spin 36s linear infinite;
  animation: spin 36s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media (max-width: 680px) {
    background-size: 400px;
    height: 400px;
    width: 400px;
  }
`;

export const Bg3 = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  background-image: url(${leaf});
  background-size: 400px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.1;
  -webkit-animation: spinan 56s linear infinite;
  -moz-animation: spinan 56s linear infinite;
  animation: spinan 56s linear infinite;

  @-moz-keyframes spinan {
    100% {
      -moz-transform: rotate(-360deg);
    }
  }
  @-webkit-keyframes spinan {
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }
  @keyframes spinan {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @media (max-width: 680px) {
    background-size: 400px;
    height: 400px;
    width: 400px;
  }
`;

export const Bg4 = styled(Bg3)`
  bottom: 0;
  top: unset;
  right: 280px;
`;

export const Bg5 = styled(Bg3)`
  bottom: 0;
  top: unset;
  left: 80px;
`;

export const Info = styled.div`
  font-family: "miama";
  width: 600px;
  z-index: 2;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  position: relative;
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

  @media (max-width: 680px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

export const Text = styled.p`
  font-family: "montserrat";
  font-weight: 400;
  color: black;
  color: #7e7e7e;
  font-size: 12px;
  opacity: 0.8;
  animation: aniTB1 3s forwards;
  width: 200px;

  b {
    color: black;
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media (max-width: 680px) {
    width: 150px;
  }
`;

export const Times = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;

  @media (max-width: 680px) {
    gap: 10px;
  }
`;

export const Times2 = styled(Times)`
  align-self: flex-end;
`;

export const Time = styled.span`
  color: black;
  font-family: "czizh";
  font-size: 32px;
  margin: 0;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Im = styled.img`
  width: 50px;
  height: 50px;
`;

export const Timing = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: aniTB1 2s forwards;
  animation-delay: 1s;
  opacity: 0;
  width: 600px;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  position: relative;
  align-self: center;
  background-color: black;
  min-width: 1px;
  height: 0;

  animation: aniLine 2.5s forwards;

  @keyframes aniLine {
    0% {
      height: 0;
    }
    100% {
      height: 40px;
    }
  }
`;

export const Dot = styled.div`
  position: absolute;
  top: 0;
  right: -2px;
  background-color: black;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const Dot2 = styled.div`
  position: absolute;
  bottom: 0;
  right: -2px;
  background-color: black;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;
