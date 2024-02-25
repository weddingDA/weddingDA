import {
  Container,
  Title,
  Names,
  Man,
  Women,
  Data,
  SwiperContainer,
  Image,
  ContainerData,
} from "./styles";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image4 from "./assets/4.jpeg";

export default function FirstBlock() {
  return (
    <Container>
      <SwiperContainer
        spaceBetween={0}
        centeredSlides={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image src={Image4} />
        </SwiperSlide>
      </SwiperContainer>
      <Title>ПРИГЛАШЕНИЕ НА СВАДЬБУ</Title>

      <ContainerData>
        <Names>
          <Man>Александр</Man> <p>и</p> <Women>Наталья</Women>
        </Names>
        <Data>10 • 08 • 2024</Data>
      </ContainerData>
    </Container>
  );
}
