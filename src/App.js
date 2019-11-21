import React from 'react';
import './App.css';
import Homepage from "./Containers/Homepage";
import {ParallaxProvider} from "react-scroll-parallax/cjs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParallaxProvider>
          <Homepage/>
        </ParallaxProvider>
      </header>
    </div>
  );
}

export default App;
