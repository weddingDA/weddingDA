import { Container, Line } from "./styles";
import { Title } from "../WeddingConvert/styles";

export default function BaseContainer(props) {
  return (
    <Container pos={props.bottom}>
      <Title>{props.title}</Title>
      <Line />
      {props.children}
    </Container>
  );
}
