import React, { useEffect } from "react";
import "./App.css"
import CoverPage from "./components/CoverPage";
//import DoneBy from "./components/DoneBy";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Overview from "./components/Overview";
import Specifications from "./components/Specifications";


const App = () => {

  return <div className="App">
    <Header />
    <CoverPage />
    <Intro />
    <Overview />
    <Specifications />
  </div>
}


export default App;