import TitleText from "./TitleText";
import {COLOR_PRIMARY} from "../utils/Colors";
import React from "react";
import {Animate, easings} from "react-show";

const SubTitle = ({title, isSkillAnimating}) => {
  return (
    <div style={subtitleContainer}>
      <TitleText title={title} style={{fontWeight: 800, color: COLOR_PRIMARY}}/>
      <Animate
        show={isSkillAnimating}
        duration={1200}
        easing={easings.easeOutSine}
        style={{
          marginTop: -10,
          height: 5,
          width: 0,
          backgroundColor: COLOR_PRIMARY
        }}
        start={{
          marginTop: -10,
          height: 5,
          width: 40,
          backgroundColor: COLOR_PRIMARY
        }}
      />
    </div>
  )
};

const subtitleContainer = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection:'column',
  marginBottom: 20,
};

export default SubTitle;
