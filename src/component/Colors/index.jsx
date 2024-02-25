import { Text, Rounds, Round, Container, TitleComponent } from "./styles";
import Title from "../Title";

export default function Colors() {
  return (
    <Container>
      <TitleComponent>
        <Title text='DressCode' />
      </TitleComponent>
      <Text>
        Мы будем очень рады, если ваши наряды будут соответствовать цветовой
        гамме нашей свадьбы
      </Text>
      <Rounds>
        <Round color={"#d3c7d8"} />
        <Round color={"#b297be"} />
        <Round color={"#c3a3bf"} />
        <Round color={"#907c9e"} />
      </Rounds>
    </Container>
  );
}
