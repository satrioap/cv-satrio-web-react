import React from 'react';
import '../index.css';
import {Parallax} from "react-scroll-parallax/cjs";
import NormalText from "../Components/NormalText";

const Experience = () => {
    return (
      <Parallax>
        <div style={{width: '100%', height: '100vh'}}>
          <NormalText title="This is my experience"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </Parallax>
    );
};

export default Experience;
