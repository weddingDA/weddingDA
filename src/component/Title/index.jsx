import { Container, Text, WhiteBlock } from "./styles";

export default function Title({ text }) {
  return (
    <Container>
      <WhiteBlock />
      <Text>{text}</Text>
    </Container>
  );
}
