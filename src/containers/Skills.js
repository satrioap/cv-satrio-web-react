import React from 'react';
import '../index.css';
import NormalText from "../components/NormalText";

const Skills = () => {
    return (
        <div style={{display: 'flex',
            width: '100%',
            height: '100vh',
            justifyContent: 'center'}}>
            <div style={{...styles, marginLeft: 20}}>

            </div>
            <div style={{...styles, marginRight: 20}}>

            </div>
        </div>
    );
};

const styles = {
    margin: 10,
    backgroundColor: '#000',
    width: "50%",
    height: 500,
    borderRadius: 10
};

export default Skills;
