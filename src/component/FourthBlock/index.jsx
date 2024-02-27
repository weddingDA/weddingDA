import {
  Container,
  Info,
  Title,
  Text,
  Times,
  Timing,
  Time,
  Im,
  Line,
  Brash,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";
import b from "./assets/transfer.jpeg";
import c from "./assets/welcome.jpeg";
import cl from "./assets/fiinal.jpeg";
import p from "./assets/banket.jpeg";
import { Leafs } from "../SecondBlock/styles";

export default function FourthBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);
  const [isLoadedText, setIsLoadedText] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) setIsLoadedTitle(true);
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
  }, [isInViewport1, isInViewportText]);

  return (
    <Container>
      <Leafs />
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Программа дня
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
          </Title>
        )}
        {isLoadedText ? (
          <Timing key='hText' ref={refText}>
            <Times>
              <Time>13:30</Time>
              <Im src={b} />
              <Text>
                <b>Трансфер</b>
                <br />
                <br />
                сбор гостей для отправления на место торжества
              </Text>
            </Times>
            <Line />
            <Times>
              <Time>14:30</Time>
              <Im src={c} />
              <Text>
                <b>Сбор гостей</b>
                <br />
                <br />
                собираясь на мероприятие, просим взять с собой ваши прекрасные
                улыбки и хорошее настроение
              </Text>
            </Times>
            <Line />

            <Times>
              <Time>15:00</Time>
              <Im src={p} />
              <Text>
                <b>Начало банкета</b>
                <br />
                <br />
                время вкусной еды, танцев и развлечений
              </Text>
            </Times>
            <Line />

            <Times>
              <Time>21:00</Time>
              <Im src={cl} />
              <Text>
                <b>Финал</b>
                <br />
                <br />К сожалению, даже такой прекрасный вечер может закончится
              </Text>
            </Times>
          </Timing>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
      </Info>
    </Container>
  );
}
