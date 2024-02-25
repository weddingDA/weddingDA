import {
  Container,
  Info,
  Title,
  Text,
  Date,
  Calendar,
  CalSceleton,
  Month,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function SecondBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);
  const refText2 = useRef(null);
  const refDate = useRef(null);
  const refMonth = useRef(null);
  const refCalendar = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);
  const [isLoadedText, setIsLoadedText] = useState(false);
  const [isLoadedText2, setIsLoadedText2] = useState(false);
  const [isLoadedDate, setIsLoadedDate] = useState(false);
  const [isLoadedMonth, setIsLoadedMonth] = useState(false);
  const [isLoadedCalendar, setIsLoadedCalendar] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);
  const isInViewportText2 = useIsInViewport(refText2);
  const isInViewportDate = useIsInViewport(refDate);
  const isInViewportMonth = useIsInViewport(refMonth);
  const isInViewportCalendar = useIsInViewport(refCalendar);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) {
      setIsLoadedTitle(true);
    }
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
    if (!isLoadedText2 && isInViewportText2) setIsLoadedText2(true);
    if (!isLoadedMonth && isInViewportMonth) setIsLoadedMonth(true);
    if (!isLoadedDate && isInViewportDate) setIsLoadedDate(true);
    if (!isLoadedCalendar && isInViewportCalendar) setIsLoadedCalendar(true);
  }, [
    isInViewport1,
    isInViewportText,
    isInViewportDate,
    isInViewportText2,
    isInViewportMonth,
    isInViewportCalendar,
  ]);

  return (
    <Container>
      <Info>
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            «Самое главное и ценное в жизни - это семья! Сначала, в которой ты
            рождаешься, а затем, которую ты создаешь»
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}

        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Дорогие гости!
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
          </Title>
        )}

        {isLoadedDate ? (
          <Date key='displayesDate' ref={refDate}>
            10 августа 2024 года
          </Date>
        ) : (
          <Date key='hiddenDate' ref={refDate}>
            <br />
          </Date>
        )}
        {isLoadedText2 ? (
          <Text key='displayesText2' ref={refText2}>
            Состоится счастливое и значимое событие - день создания нашей семьи!
            <br />
            <br />
          </Text>
        ) : (
          <Text key='hiddenText2' ref={refText2}>
            <br /> <br /> <br />
            <br /> <br /> <br /> <br />
          </Text>
        )}
        {isLoadedMonth ? (
          <Month key='displayesMonth' ref={refMonth}>
            Август 2024
          </Month>
        ) : (
          <Month key='hiddenMonth' ref={refMonth}>
            <br />
          </Month>
        )}
        {isLoadedCalendar ? (
          <Calendar key='displayesCalendar' ref={refCalendar}>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z'
                  fill='#000'
                ></path>
              </g>
            </svg>
          </Calendar>
        ) : (
          <CalSceleton key='hiddenCalendar' ref={refCalendar}></CalSceleton>
        )}
      </Info>
    </Container>
  );
}
