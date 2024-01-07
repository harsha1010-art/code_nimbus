import React from "react";
import Navbar from "./Components/navbar";
import './App.css'
import './index.css'
import Slides from "./Components/Courrousel";
import { Coustomcard } from "./Components/Couple";
import { Forhim } from "./Components/Forhim";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'



const App = () => {
  return (
    
      <><div>
      <header>
        <div className="nav-area">
          <Router>
        <Routes>
        <Route path="/" element={<><Navbar /><Slides /></>}></Route>
        </Routes>
      </Router>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Coustomcard/>}/>

        </Routes>
        
      </Router>
     


    </div>
    <div className="routing">
      <Router>
        <Routes>
          <Route path="/forhim" element={<Forhim />}></Route>
        </Routes>
      </Router>
   
         
          
        
    </div>
   </>
       
  
  );
};

export default App;
