import styled from "styled-components";
import bg from "./assets/bg.jpg";

export const Container = styled.div`
  position: relative;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  height: 700px;
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 30px 0 0 50px;
  align-items: center;
  gap: 40px;
  bottom: 20px;
`;

export const Title = styled.h2`
  top: 40px;
  height: 40px;
  margin: 40px 0 0;
  margin: 0;
  animation: ani 1.5s forwards;
  color: black;
  font-size: 17px;
  font-family: "exo";
  line-height: 1;
  font-weight: 400;
  letter-spacing: 1.5px;

  @keyframes ani {
    0% {
      padding: 40px 0 0;
    }
    100% {
      padding: 0 0 40px;
    }
  }
`;

export const Data = styled.h2`
  opacity: 0.4;
  height: 20px;
  padding: 40px 0 0;
  margin: 0;
  animation: aniData 1.5s forwards;
  color: black;
  font-size: 24px;
  font-weight: bolder;
  font-family: "czizh";
  line-height: 1;
  font-weight: 400;
  letter-spacing: 1.5px;
  animation-delay: 0.5s;

  @keyframes aniData {
    0% {
      opacity: 0.4;
      padding: 40px 0 0;
    }
    100% {
      opacity: 1;
      padding: 0 0 40px;
    }
  }
`;

export const Names = styled.span`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: "czizh";
  gap: 20px;
  line-height: 32px;
  font-size: 32px;
  color: black;
  opacity: 0;
  animation: animate 1.5s forwards;
  animation-delay: 0.5ms;

  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  p {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 680px) {
    line-height: 52px;
    font-size: 48px;
    height: 200px;
  }
`;

export const Man = styled.p`
  line-height: 42px;
  font-size: 44px;
  animation: aniMan 2s forwards;
  animation-delay: 0.5ms;
  opacity: 0;

  @keyframes aniMan {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Women = styled.p`
  line-height: 42px;
  font-size: 44px;
  animation: aniWomen 3s forwards;
  animation-delay: 1ms;
  opacity: 0;

  @keyframes aniWomen {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 100vh;
  opacity: 0.8;
`;
