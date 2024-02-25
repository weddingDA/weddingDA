import { Container, Info, Title, Text, Bg, Bg2 } from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function SixBlock() {
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
      <Bg />
      <Bg2 />
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Анкета <br />
            гостя
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
            <br />
            <br />
          </Title>
        )}
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            ОТВЕТЬТЕ, ПОЖАЛУЙСТА, НА НЕСКОЛЬКО ВОПРОСОВ НИЖЕ
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br />
          </Text>
        )}
        <iframe
          src='https://forms.yandex.ru/u/65d47bab5056903371f59638/?iframe=1'
          frameborder='0'
          name='ya-form-65d47bab5056903371f59638'
          height='1480'
          width='370'
          scrolling='no'
        ></iframe>
      </Info>
    </Container>
  );
}
