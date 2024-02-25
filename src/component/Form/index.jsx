import { Container } from "./styles";
import Title from "../Title";
export default function Form() {
  return (
    <Container>
      <Title text='Подтвердите свое присутствие!' />
      <iframe
        src='https://forms.yandex.ru/cloud/65b60a07c417f3b45f3c7c5e/?iframe=1'
        frameborder='0'
        name='ya-form-65b60a07c417f3b45f3c7c5e'
        height='564'
        width='370'
      ></iframe>
    </Container>
  );
}
