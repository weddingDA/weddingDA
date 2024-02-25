import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  height: calc(100% - 80px);
`;

export const ContainerData = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  bottom: 20px;
`;

export const SwiperContainer = styled(Swiper)`
  height: 100%;
  width: 100%;
  z-index: 0;

  @media (max-width: 680px) {
    height: 100vh;
    object-fit: cover;
  }
`;

export const Title = styled.h2`
  position: absolute;
  top: 40px;
  height: 40px;
  margin: 40px 0 0;
  margin: 0;
  animation: ani 1.5s forwards;
  color: white;
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
  color: white;
  font-size: 24px;
  font-weight: bolder;
  font-family: "exo";
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
  font-family: "miama";
  height: 280px;
  gap: 8px;
  margin: 40px 0;
  font-size: 64px;
  color: white;
  width: 100%;
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
  position: absolute;
  top: 20px;
  left: 0;
  line-height: 82px;
  font-size: 64px;
  transform: translate(0, 0);
  animation: aniMan 1.5s forwards;
  animation-delay: 0.5ms;

  @keyframes aniMan {
    0% {
      left: 0%;
      transform: translate(0, 0);
    }
    100% {
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: 680px) {
    line-height: 52px;
    font-size: 48px;
  }
`;

export const Women = styled.p`
  position: absolute;
  bottom: 20px;
  right: 0;
  line-height: 82px;
  font-size: 64px;
  transform: translate(0, 0);
  animation: aniWomen 2s forwards;
  animation-delay: 1ms;

  @keyframes aniWomen {
    0% {
      right: 0%;
      transform: translate(0, 0);
    }
    100% {
      right: 50%;
      transform: translate(50%, 0);
    }
  }

  @media (max-width: 680px) {
    line-height: 52px;
    font-size: 48px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 100vh;
  opacity: 0.8;
`;
