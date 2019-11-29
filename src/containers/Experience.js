import React from 'react';
import '../index.css';
import NormalText from "../components/NormalText";

const Experience = () => {
    return (
        <div style={{width: '100%', height: '96vh'}}>
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
    );
};

export default Experience;
