import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px 80px;
  width: 537px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  p {
    text-wrap: nowrap;
  }

  @media (max-width: 680px) {
    width: 370px;
  }
`;

export const Times = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const Times2 = styled(Times)`
  align-self: flex-end;
`;

export const Time = styled.span`
  color: black;
  font-family: "oranienbaum";
  font-size: 42px;
  text-shadow: 2px 2px 0px #fff;
  margin: 0;
`;

export const Text = styled.span`
  text-align: center;
  font-size: 24px;
  margin: 0;
  z-index: 0;
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
  width: 300px;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  gap: 12px;
  height: 400px;
`;

export const Line = styled.div`
  position: relative;
  align-self: center;
  background-color: black;
  min-width: 1px;
  height: 75%;
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
