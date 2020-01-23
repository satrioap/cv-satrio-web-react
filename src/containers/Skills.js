import React from 'react';
import '../index.css';
import SubTitle from '../components/SubTitle';
import SmallText from '../components/SmallText';
import {WHITE} from '../utils/Colors';
import {Animate, easings} from "react-show";

const skills = {
  technical: [
    {
      name: 'Javascript (React)',
      value: 85,
    },
    {
      name: 'Java (SpringBoot)',
      value: 80,
    },
    {
      name: 'Android Studio',
      value: 80,
    },
    {
      name: 'GraphQL',
      value: 60,
    },
    {
      name: 'MySQL',
      value: 65
    },
    {
      name: 'Image & Design Tools',
      value: 95
    },
  ],
  practice: [
    {
      name: 'Clean Code',
      value: 90,
    },
    {
      name: 'Agile Practice',
      value: 75,
    },
    {
      name: 'Pair Programming',
      value: 80,
    },
    {
      name: 'Naming Convention',
      value: 85,
    },
    {
      name: 'UI/UX',
      value: 95,
    },
    {
      name: 'TDD',
      value: 70,
    }
  ]
};

const SkillSet = ({skill, isSkillAnimating}) => {
  const {name, value} =  skill;

  const skillLevel = () => {
    if (value <= 60) return  'skillColorBad';
    if (value <= 70) return  'skillColorMedium';
    if (value <= 85) return  'skillColorGood';
    return 'skillColorExcellent'
  };

  const skillBarBackgroundColor = () => {
    if (value <= 60) return  '#f8503233';
    if (value <= 70) return  '#feb47b33';
    if (value <= 85) return  '#93F9B933';
    return '#00d2ff33'
  };

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        minWidth: 160,
        marginRight: 10,
        justifyContent: 'flex-start',
      }}>
        <SmallText title={name} style={{color: WHITE, fontSize: 14, fontWeight: 400}}/>
      </div>
      <div style={{
        minWidth: 320,
        height: 16,
        backgroundColor: skillBarBackgroundColor(),
        borderRadius: 8,
        marginRight: 10,
      }}>
        <Animate
          className={skillLevel()}
          show={isSkillAnimating}
          duration={800}
          easing={easings.easeOutSine}
          style={{
            height:  16,
            backgroundColor: WHITE,
            width: '0%',
            borderRadius: 8,
          }}
          start={{
            height:  16,
            backgroundColor: WHITE,
            width:  `${value}%`,
            borderRadius: 8,
          }}
        />
      </div>
    </div>
  )
};

const Skills = ({isSkillAnimating}) => {
  const {technical, practice} =  skills;
  return (
      <div style={{
        display: 'flex',
        width: '90%',
        height: '170vh',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        paddingLeft: '10%'
      }}>
        <div style={{...container, marginLeft: 40}}>
          <SubTitle title="Technical Skills" isSkillAnimating={isSkillAnimating} textColor={WHITE}/>
          <div style={block}>
            <div style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              {technical.map((skill, index) => <SkillSet key={index} skill={skill} isSkillAnimating={isSkillAnimating}/>)}
            </div>
          </div>
        </div>
        <div style={{...container, marginRight: 40}}>
          <SubTitle title="Followed Practice" isSkillAnimating={isSkillAnimating} textColor={WHITE}/>
          <div style={block}>
            <div style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              {practice.map((skill, index) => <SkillSet key={index} skill={skill} isSkillAnimating={isSkillAnimating}/>)}
            </div>
          </div>
        </div>

      </div>
  );
};

const container = {
  margin: 20,
  display: 'flex',
  width: "50%",
  height: 500,
  flexDirection: 'column'
};

const block = {
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 5,
  backgroundColor: '#ffffff40',
  maxWidth: "100%",
  minHeight: 200,
};

export default Skills;
