import styled from "styled-components";
import place from "./assets/place.webp";
import flower from "./assets/fower.png";

export const Container = styled.div`
  align-items: center;
  padding: 0 20px 80px;
  width: 537px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;

  @media (max-width: 680px) {
    width: 370px;
  }
`;

export const TitleComponent = styled.div`
  align-self: start;
  p {
    text-wrap: nowrap;
  }

  @media (max-width: 680px) {
    p {
      font-size: 28px;
    }
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  max-width: 980px;
  margin: 32px 0;
`;

export const Image = styled.div`
  position: relative;
  background-image: url(${place});
  width: 320px;
  height: 320px;
  border-radius: 20px;
  margin-left: 40px;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid black;
  top: 20px;
  right: -20px;
  border-radius: 20px;
  z-index: 10;
`;

export const Flower = styled.div`
  background-image: url(${flower});
  height: 320px;
  position: absolute;
  top: 120px;
  left: -120px;
  z-index: 10;
  width: 180px;
  background-size: cover;
  transform: rotate(-23deg);
`;
