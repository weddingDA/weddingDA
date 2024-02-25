import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  width: fit-content;
`;

export const WhiteBlock = styled.div`
  position: absolute;
  left: 20px;
  height: 100%;
  width: 80%;
  border-radius: 40px;
  background-color: #ffffff;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  z-index: 0;

  -webkit-box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Text = styled.p`
  align-items: center;
  font-family: "oranienbaum";
  display: flex;
  flex-direction: column;
  font-size: 42px;
  padding: 0 0 0 15%;
  z-index: 1;
  margin: 12px 0;
  letter-spacing: 5px;
  font-weight: bold;
  text-shadow: 2px 2px 0px rgba(99, 34, 64, 0.2);
  color: rgba(99, 34, 64, 1);
  text-indent: 12px;

  @media (max-width: 680px) {
    font-size: 32px;
  }
`;
