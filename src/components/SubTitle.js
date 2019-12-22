import TitleText from "./TitleText";
import {COLOR_PRIMARY} from "../utils/Colors";
import React from "react";

const SubTitle = ({title}) => {
  return (
    <div style={subtitleContainer}>
      <TitleText title={title} style={{fontWeight: 800, color: COLOR_PRIMARY}}/>
      <div style={{marginTop: -10, height: 5, width: 40, backgroundColor: COLOR_PRIMARY}}/>
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
