import React from 'react';
import '../index.css';
import {Parallax} from "react-scroll-parallax/cjs";
import TitleText from "../Components/TitleText";

const Profile = () => {
    return (
      <Parallax>
        <div style={{width: '100%', height: '100vh'}}>
          <TitleText title="This is my profile"/>
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

export default Profile;
