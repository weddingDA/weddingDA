import { Container, CalendarImage, Text } from "./styles";
import Title from "../Title";

export default function WeddingConvert() {
  return (
    <Container id='convert'>
      <Title text='Дорогие наши друзья и близкие!' />
      <Text>
        «Самое главное и ценное в жизни - это семья! Сначала, в которой ты
        рождаешься, а затем, которую ты создаешь»
      </Text>

      <Text>
        <b>27 июля 2024 года</b>
        <br />
        Состоится счастливое и значимое событие - день нашей свадьбы
      </Text>

      <CalendarImage />

      <Text>
        Приглашаем вас стать гостем этого волнительного и счастливого события
      </Text>
    </Container>
  );
}
