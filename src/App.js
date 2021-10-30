import React, { useEffect } from "react";
import "./App.css"
import DoneBy from "./components/DoneBy";
import Goals from "./components/Goals";
import Header from "./components/Header";
import Intro from "./components/Intro";
import MileStones from "./components/MIleStones";
import Overview from "./components/Overview";
import Specifications from "./components/Specifications";


const App = () => {


  useEffect(() => {
  }, []);

  return <div className="App">
    <Header />
    <DoneBy />
    <Intro />
    <Overview />
    <Goals />
    <Specifications />
    <MileStones />
  </div>
}


export default App;