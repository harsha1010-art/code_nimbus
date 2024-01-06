import React from "react";
import Navbar from "./Components/navbar";
import './App.css'
import './index.css'
import Slides from "./Components/Courrousel";
import { Coustomcard } from "./Components/Couple";



const App = () => {
  
  return (
    <><header>
      <div className="nav-area">
        {/* <a href="/#" className="logo">
      G❤️D
    </a> */}
        <Navbar />
        <Slides />
      </div>



    </header><Coustomcard /></>
  );
};

export default App;
