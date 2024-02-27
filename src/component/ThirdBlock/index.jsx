import {
  Container,
  Info,
  Title,
  Text,
  SwiperContainer,
  Btn,
  Image,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import p1 from "./assets/1.jpeg";
import p3 from "./assets/2.jpeg";
import p2 from "./assets/3.jpeg";
import p4 from "./assets/4.webp";
import p5 from "./assets/5.jpg";
import p6 from "./assets/6.jpg";
import { Leafs } from "../SecondBlock/styles";

export default function ThirdBlock() {
  const refText = useRef(null);

  const [isLoadedText, setIsLoadedText] = useState(false);

  const isInViewportText = useIsInViewport(refText);
  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
  }, [isInViewportText]);

  return (
    <Container>
      <Info>
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            База отдыха "Карельская"
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
      </Info>
      <SwiperContainer
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p6} />
        </SwiperSlide>
      </SwiperContainer>
      <Info>
        <Leafs />
        <Title key='displayesTitle'>Как добраться</Title>
        <Text key='displayesText'>
          Для вашего удобства мы подготовили карту. Надеемся, что вы легко
          найдете место проведения свадьбы и порадуете нас своим присутствием!
        </Text>
      </Info>
      <iframe
        src='https://yandex.ru/map-widget/v1/?um=constructor%3A7442cf8bc0da2b7509785da83bac159ff5544c72701103a44f960c6c48d99837&amp;source=constructor'
        width='100%'
        height='350'
        frameborder='0'
      ></iframe>
      <Info>
        <Text key='displayesText'>
          Для вашего удобства будет организован трансфер до базы отдыха и
          обратно, об этом более подробно сообщим позже.
        </Text>
      </Info>
    </Container>
  );
}
