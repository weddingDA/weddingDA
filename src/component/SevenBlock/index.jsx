import {
  Container,
  Info,
  Title,
  Text,
  Btn,
  Numbers,
  DatesBeforeWedding,
  BottomImage,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function SevenBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);
  const refText1 = useRef(null);
  const [isLoadedTitle, setIsLoadedTitle] = useState(false);

  const [isLoadedText, setIsLoadedText] = useState(false);
  const [isLoadedText1, setIsLoadedText1] = useState(false);
  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);
  const isInViewportText1 = useIsInViewport(refText1);

  var endDate = new Date("Aug 10, 2024 15:30:00").getTime();
  var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

  function decOfNum(number, titles) {
    if (!decCache[number])
      decCache[number] =
        number % 100 > 4 && number % 100 < 20
          ? 2
          : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
  }

  setInterval(function () {
    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      const sec = decOfNum(secs, ["СЕКУНДА", "СЕКУНДЫ", "СЕКУНД"]);
      const min = decOfNum(mins, ["МИНУТЫ", "МИНУТЫ", "МИНУТ"]);
      const h = decOfNum(hours, ["ЧАС", "ЧАСА", "ЧАСОВ"]);
      const d = decOfNum(days, ["ДЕНЬ", "ДНЯ", "ДНЕЙ"]);

      document.getElementById("timer-days").innerHTML =
        days + `<span class='label'>${d}</span>`;

      document.getElementById("timer-hours").innerHTML =
        ("0" + hours).slice(-2) + `<span class='label'>${h}</span>`;

      document.getElementById("timer-mins").innerHTML =
        ("0" + mins).slice(-2) + `<span class='label'>${min}</span>`;

      document.getElementById("timer-secs").innerHTML =
        ("0" + secs).slice(-2) + `<span class='label'>${sec}</span>`;
    } else {
      document.getElementById("timer").innerHTML = "The countdown is over!";
    }
  }, 1000);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) setIsLoadedTitle(true);
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
    if (!isLoadedText1 && isInViewportText1) setIsLoadedText1(true);
  }, [isInViewport1, isInViewportText, isInViewportText1]);

  return (
    <Container>
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Контакты
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
            P.S. если вы заблудились, готовите нам сюрприз или у вас появились
            какие-либо вопросы, вам с радостью поможет наш организатор Ксения
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br />
          </Text>
        )}
        <a href='tel:89272751199' style={{ textDecoration: "none" }}>
          <Btn>+79272751199</Btn>
        </a>
        <Text key='displayesText1' ref={refText1}>
          <p>Ждем вас!</p>
          <DatesBeforeWedding>
            <Numbers id='timer-days' />
            <Numbers id='timer-hours' />
            <Numbers id='timer-mins' />
            <Numbers id='timer-secs' />
          </DatesBeforeWedding>
        </Text>
      </Info>
      <BottomImage />
    </Container>
  );
}
