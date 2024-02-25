import {
  Container,
  Times,
  Timing,
  Time,
  Text,
  Circle,
  Im,
  Times2,
  Line,
  Dot,
  Dot2,
} from "./styles";
import Title from "../Title";
import closh from "./assets/closh.png";
import pin from "./assets/place.png";

export default function Prog() {
  return (
    <Container>
      <Title text='Программа дня' />
      <Timing>
        <Times>
          <Circle>
            <Im src={closh} />
          </Circle>
          <Time>14:30</Time>
          <Text>
            Сбор
            <br />
            гостей
          </Text>
        </Times>
        <Line>
          <Dot />
          <Dot2 />
        </Line>
        <Times2>
          <Circle>
            <Im src={pin} />
          </Circle>
          <Time>16:00</Time>
          <Text>
             Начало
            <br />
            свадебнного
            <br />
            ужина
          </Text>
        </Times2>
      </Timing>
    </Container>
  );
}
