import React from 'react';
import '../index.css';
import TitleText from '../components/TitleText';
import UseAnimations from 'react-useanimations';
import {Spring} from "react-spring/renderprops-universal";

const WelcomeScreen = (props) => {
  const {onClick} = props;
    return (
      <div onClick={onClick} style={{zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 24 }}>
        <Spring
          config={{delay: 900, tension: 150, friction: 200}}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props => <TitleText style={props} title={"Welcome, adventurer"}/>}
        </Spring>
        <UseAnimations animationKey="arrowDown" size={64} />
      </div>
    );
};

export default WelcomeScreen;
