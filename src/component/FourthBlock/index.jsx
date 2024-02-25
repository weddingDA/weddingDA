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
import b from "./assets/b.png";
import c from "./assets/c.png";
import cl from "./assets/cl.png";
import p from "./assets/p.png";

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
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Программа дня
            <Brash />
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
          </Title>
        )}
        {isLoadedText ? (
          <Timing key='hText' ref={refText}>
            <Times>
              <Time>15:00</Time>
              <Im src={b} />
              <Text>
                <b>WELCOME</b>
                <br />
                <br />
                на торжество возьмите с собой свои улыбки и хорошее настроение
              </Text>
            </Times>
            <Line />
            <Times>
              <Time>15:30</Time>
              <Im src={c} />
              <Text>
                <b>Выездная церемония</b>
                <br />
                <br />
                приготовьте платочки для трогательного момента
              </Text>
            </Times>
            <Line />

            <Times>
              <Time>16:00</Time>
              <Im src={p} />
              <Text>
                <b>Съемка с гостями на фотозоне</b>
                <br />
                <br />
                время для создания памятных фото и приятных воспоминаний
              </Text>
            </Times>
            <Line />

            <Times>
              <Time>16:30</Time>
              <Im src={cl} />
              <Text>
                <b>Банкет</b>
                <br />
                <br />
                время танцев, вкусной еды, чудесных пожеланий и развлечений
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
