import TitleText from "./TitleText";
import {COLOR_PRIMARY} from "../utils/Colors";
import React from "react";
import {Animate, easings} from "react-show";

const SubTitle = ({title, isSkillAnimating, textColor}) => {
  return (
    <div style={subtitleContainer}>
      <TitleText title={title} style={{fontWeight: 800, color: textColor || COLOR_PRIMARY}}/>
      <Animate
        show={isSkillAnimating}
        duration={1200}
        easing={easings.easeOutSine}
        style={{
          marginTop: -10,
          height: 5,
          width: 0,
          backgroundColor: textColor || COLOR_PRIMARY
        }}
        start={{
          marginTop: -10,
          height: 5,
          width: 40,
          backgroundColor: textColor || COLOR_PRIMARY
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
