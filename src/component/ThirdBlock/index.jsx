import { Container, Bg, Info, Title, Text, Bg2, Btn } from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function ThirdBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  const [isLoadedText, setIsLoadedText] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);

  const handleOpenMap = () => {
    setOpenMap(!openMap);
  };
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
            Место
            <br /> проведения
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br /> <br /> <br />
          </Title>
        )}
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            Республика Мордовия, г. Саранск, Отель Radisson, вход со стороны
            Кавказской (Советская, 54)
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
        {openMap && (
          <iframe
            src='https://yandex.ru/map-widget/v1/org/radisson_hotel_congress_center_saransk/232314082176/?indoorLevel=1&ll=45.177525%2C54.180225&z=17'
            width='350'
            height='350'
            frameborder='0'
          ></iframe>
        )}
        <Btn onClick={handleOpenMap}>Открыть карту</Btn>
      </Info>
    </Container>
  );
}
