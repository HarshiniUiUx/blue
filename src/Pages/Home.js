import React from "react";
import Banner from './Home/Component/Banner/Banner';
import Buy from "./Home/Component/Buy/Buy";
import Buy2 from "./Home/Component/Buy2/Buy2";
import Bestsellers from "./Home/Component/Bestsellers/Bestsellers";
import Speciality from "./Home/Component/Speciality/Speciality";
import Subscribe from "./Home/Component/Subscribe/Subscribe";
import Flow from "./Home/Component/Flow/Flow";
import Happy from "./Home/Component/Happy/Happy";
import News from "./Home/Component/News/News";


function Home() {
  return (
    <>
    
     <Banner/>
    <Buy/>
    <Buy2/>
    <Bestsellers/>
    <Speciality/>
    <Subscribe/>
    <Flow/>
    <Happy/>
    <News/> 
    </>
  );
}
export default Home;