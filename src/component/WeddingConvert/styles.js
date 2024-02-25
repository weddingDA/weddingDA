import styled from "styled-components";
import Calendar from "./assets/date.png";

export const Container = styled.div`
  position: relative;
  padding: 0 20px 0;
  margin: -50px 0 0;
  width: 537px;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    width: 370px;
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  font-size: 34px;
  z-index: 112;
  padding: 10px 20px;
  margin: 0 auto;
  border-radius: 5px;
  width: calc(100% - 40px);

  @media (max-width: 425px) {
    font-size: 28px;
  }

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-family: sans-serif;
  position: relative;
  text-align: center;
  z-index: 112;
  padding: 10px 20px;
  margin: 48px auto 48px;
  font-size: 22px;
  border-radius: 5px;
  text-shadow: 2px 2px 0px #fff;
  max-width: 80%;

  b {
    color: rgba(99, 34, 64, 0.8);
    font-family: "oranienbaum";
    font-size: 32px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 12px;
  }
`;

export const CalendarImage = styled.div`
  border-radius: 12px;
  width: 360px;
  height: 360px;
  background-image: url(${Calendar});
  background-size: cover;
`;
