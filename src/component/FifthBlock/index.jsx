import {
  Container,
  Girls,
  Info,
  Title,
  Text,
  Grid,
  Rounds,
  Round,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";
import ImageG1 from "./girls/1.jpeg";
import ImageG2 from "./girls/2.jpeg";
import ImageG3 from "./girls/3.jpeg";
import ImageG4 from "./girls/4.jpeg";
import ImageG5 from "./girls/5.jpeg";
import ImageG6 from "./girls/6.jpeg";
import ImageB1 from "./boys/1.jpeg";
import ImageB2 from "./boys/2.jpeg";
import ImageB3 from "./boys/3.jpeg";
import ImageB4 from "./boys/4.jpeg";
import ImageB5 from "./boys/5.jpeg";
export default function FifthBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);
  const refColors = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);

  const [isLoadedText, setIsLoadedText] = useState(false);
  const [isLoadedColor, setIsLoadedColor] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);
  const isInViewportColor = useIsInViewport(refColors);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) setIsLoadedTitle(true);
    if (!isLoadedColor && isInViewportColor) setIsLoadedColor(true);
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
  }, [isInViewport1, isInViewportText, isInViewportColor]);

  return (
    <Container>
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Детали
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
          </Title>
        )}
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            Мы будем очень рады, если ваши наряды будут соответствовать цветовой
            гамме нашей свадьбы
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
        {isLoadedColor ? (
          <Rounds key='loaded' ref={refColors}>
            <Round color={"#c8d5de"} />
            <Round color={"#4a5497"} />
            <Round color={"#7191d7"} />
          </Rounds>
        ) : (
          <Rounds key='hidden' ref={refColors}></Rounds>
        )}
      </Info>
      <Girls>
        <Title>Девушки</Title>
        <Grid>
          <img src={ImageG1} />
          <img src={ImageG2} />
          <img src={ImageG3} />
          <img src={ImageG4} />
          <img src={ImageG6} />
          <img src={ImageG5} />
        </Grid>
      </Girls>
      <Rounds key='loaded' ref={refColors}>
        <Round color={"#b1c5db"} />
        <Round color={"#242d4d"} />
        <Round color={"#201c1e"} />
      </Rounds>
      <Girls>
        <Title>Мужчины</Title>
        <Grid>
          <img src={ImageB1} />
          <img src={ImageB2} />
          <img src={ImageB3} />
          <img src={ImageB4} />
          <img src={ImageB5} />
        </Grid>
      </Girls>
    </Container>
  );
}
