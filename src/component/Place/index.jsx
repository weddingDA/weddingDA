import Title from "../Title";

import {
  Container,
  Flower,
  Text,
  TitleComponent,
  Image,
  Inner,
} from "./styles";

export default function Place() {
  return (
    <Container>
      <TitleComponent>
        <Title text='Место проведения' />
      </TitleComponent>

      <Image>
        <Inner />
        <Flower></Flower>
      </Image>
      <Text>
        Наш праздник пройдет в ресторане "Хурма", развлекательный комплекс
        "Шато", 2 этаж
      </Text>
    </Container>
  );
}
