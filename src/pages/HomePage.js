import ReactDOM from "react-dom/client";
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import SoundBoard from "./SoundBoard";

class HomePage extends Component {
    state = {  } 
    render() { 

      return(<>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>}/>
              <Route path="/sound-board" element={<SoundBoard/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>)
      
    
    }

}

export default HomePage;