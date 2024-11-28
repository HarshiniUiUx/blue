
import { Routes, Route } from "react-router-dom";
import Firstrow from "./Component/Firstrow/Firstrow";
import Navbarblue from "./Component/Navbarblue/Navbarblue";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home";
import Equipment from "./Pages/Equipment";
import BestsellersCoffee from "./Pages/BestsellersCoffee";
function App() {
    return (
      <>
        <Firstrow/>
        <Navbarblue />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<Equipment/>}/>
          <Route path="/bestsellerscoffee" element={<BestsellersCoffee/>}></Route>
        </Routes>
       <Footer/>
     </>
    );
}
export default App;
