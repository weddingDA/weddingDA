import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";
import FourthBlock from "./FourthBlock";
import FifthBlock from "./FifthBlock";
import SixBlock from "./SixBlock";
import SevenBlock from "./SevenBlock";

import { Container } from "../styles";
import { useState, useEffect } from "react";

function AlexanderNataly() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const context = new AudioContext();
      context.resume();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  document.addEventListener("click", musicPlay);
  function musicPlay() {
    document.getElementById("myaudio").volume = 0.05;

    document.getElementById("myaudio").play();
    document.removeEventListener("click", musicPlay);
  }
  if (loading)
    return (
      <div class='loaderdiv'>
        <span class='loader'></span>
      </div>
    );

  return (
    <Container>
      {/* <audio id='myaudio' volume='0.1' autoPlay loop>
        <source
          src='https://od.lk/s/N18yMzg4Nzc3Nzlf/%D0%AD%D0%B4-%D0%A8%D0%B8%D1%80%D0%B0%D0%BD-Photograph-_mp3cut.net_-_1_.ogg'
          type='audio/ogg'
        />
        <source
          src='https://od.lk/s/N18yMzg4Nzc3Nzhf/%D0%AD%D0%B4%20%D0%A8%D0%B8%D1%80%D0%B0%D0%BD%20-%20Photograph%20%28mp3cut.net%29%20%281%29.mp3'
          type='audio/mpeg'
        />
      </audio> */}
      <FirstBlock />
      <SecondBlock />
      <FourthBlock />
      <ThirdBlock />
      <FifthBlock />
      <SixBlock />
      <SevenBlock />
    </Container>
  );
}

export default AlexanderNataly;
