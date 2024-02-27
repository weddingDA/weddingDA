import { Container, Names, Man, Women, Data, ContainerData } from "./styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FirstBlock() {
  return (
    <Container>
      <ContainerData>
        <Names>
          <Man>Денис</Man> <p>и</p> <Women>Анастасия</Women>
        </Names>
        <Data>3 августа 2024</Data>
      </ContainerData>
    </Container>
  );
}
