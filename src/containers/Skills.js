import React from 'react';
import '../index.css';
import SubTitle from "../components/SubTitle";
import SmallText from "../components/SmallText";
import {COLOR_PRIMARY, COLOR_SECONDARY} from "../utils/Colors";

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
      value: 70,
    },
    {
      name: 'MySQL',
      value: 75
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
      name: 'UI/UX',
      value: 95,
    },
    {
      name: 'Pair Programming',
      value: 80,
    },
    {
      name: 'JIRA',
      value: 65,
    }
  ]
};

const SkillSet = ({skill}) => {
  const {name, value} =  skill;
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
        <SmallText title={name} style={{color: COLOR_PRIMARY, fontSize: 14, fontWeight: 400}}/>
      </div>
      <div style={{
        minWidth: 440,
        height: 16,
        backgroundColor: '#dddddd60',
        borderRadius: 8,
        marginRight: 10,
      }}>
        <div style={{
          backgroundColor: COLOR_SECONDARY,
          height:  16,
          width:  `${value}%`,
          borderRadius: 8,
        }}/>
      </div>
    </div>
  )
};

const Skills = () => {
  const {technical, practice} =  skills;
  return (
      <div style={{
        display: 'flex',
        width: '100%',
        height: '170vh',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
      }}>
        <div style={{...container, marginLeft: 40}}>
          <SubTitle title="Technical Skills"/>
          <div style={block}>
            <div style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              {technical.map(skill => <SkillSet skill={skill} />)}
            </div>
          </div>
        </div>
        <div style={{...container, marginRight: 40}}>
          <SubTitle title="Practice Expertise"/>
          <div style={block}>
            <div style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              {practice.map(skill => <SkillSet skill={skill} />)}
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
