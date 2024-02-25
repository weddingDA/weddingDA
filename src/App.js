import "./App.css";
import { Routes, Route } from "react-router-dom";
import AlexanderNataly from "./component/AlexanderNataly";
import "./font/sweet.ttf";
import "./font/montserrat.ttf";
import "./font/czizh.ttf";
import "./font/madelyn.otf";
import "./font/lemon.otf";
import "./font/exo.otf";
import "./font/miama.otf";

import "./font/maki.ttf";
import "./font/Oranienbaum.ttf";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AlexanderNataly />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} /> */}
      </Routes>
    </>
  );
}
export default App;
