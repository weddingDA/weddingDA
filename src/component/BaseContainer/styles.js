import styled from "styled-components";
import background from "./assets/bg.jpeg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 80px;
  margin: -50px 0 50px;
  gap: 20px;

  :before {
    content: "";
    background-image: url(${background});
    /* CSS gradients */
    background: linear-gradient(
        to ${(props) => (props.pos ? "top" : "bottom")},
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 1)
      ),
      url(${background});
    background-position: top center;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    z-index: -1;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #dcebfa;
  width: 80px;
`;
