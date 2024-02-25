import { Text, Btn, Container, TitleComponent } from "./styles";
import Title from "../Title";

export default function Contacts() {
  return (
    <Container>
      <TitleComponent>
        <Title text='Контакты' />
      </TitleComponent>
      <Text>
        P.S. если вы заблудились, готовите нам сюрприз или у вас появились
        какие-либо вопросы, вам с радостью поможет наш организатор Ксения
      </Text>
      <a href='tel:89272751199' style={{ textDecoration: "none" }}>
        <Btn>+79272751199</Btn>
      </a>
    </Container>
  );
}
