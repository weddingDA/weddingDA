import { Container, Leafs, Info, Title, Text, Leafs2 } from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function CommonInfo() {
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
            СВАДЕБНЫЙ ОРГАНИЗАТОР
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
          </Title>
        )}
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            Если вы заблудились, готовите нам сюрприз или у вас появились
            какие-либо вопросы, вам с радостью поможет наш организатор:
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
        <Title>Ксения</Title>
        <a href='tel:89272751199' style={{ textDecoration: "none" }}>
          Тел. +79272751199
        </a>
        <Title>Пожелания</Title>

        <Text>
          Мы не хотим утруждать вас выбором подарка, поэтому будем рады вашему
          вкладу в бюджет нашей молодой семьи.
        </Text>
        <Leafs2 />
        <Leafs />
      </Info>
    </Container>
  );
}
