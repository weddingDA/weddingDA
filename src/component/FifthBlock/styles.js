import styled from "styled-components";
import lavanderTop from "../FirstBlock/assets/lavander-top.png";
import leaf from "../FirstBlock/assets/leaf.png";

export const Container = styled.div`
  padding: 80px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 40px;

  @media (max-width: 680px) {
    padding: 20px 0 80px;
  }
`;

export const Bg = styled.div`
  transform: rotate(203deg);
  top: 227px;
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
  font-size: 52px;
  font-family: "miama";
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
`;

export const Rounds = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 40px;
`;

export const Round = styled.div`
  background-color: ${(props) => props.color};
  box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 50%;
  width: 80px;
  margin: 0 0 0 -15px;
  height: 80px;
  opacity: 0;

  animation: color 1.5s forwards;
  animation-duration: 2s;
  @keyframes color {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 2s;
  }
  &:nth-child(4) {
    animation-delay: 3s;
  }
  &:nth-child(5) {
    animation-delay: 4s;
  }
  &:nth-child(6) {
    animation-delay: 5s;
  }
  &:nth-child(7) {
    animation-delay: 6s;
  }
  &:nth-child(8) {
    animation-delay: 7s;
  }
`;

export const Girls = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  height: 800px;
  overflow-y: hidden;
  p {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 0 12px 0;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 1280px) {
    align-self: start;
    gap: 20px;
    width: 100%;
  }
`;

export const Grid = styled.div`
  height: 100%;
  gap: 20px;
  display: grid;
  grid-template-columns: 347px 335px 278px;
  grid-template-rows: 421px 400px;
`;
