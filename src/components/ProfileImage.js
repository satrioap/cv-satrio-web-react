import React from "react";
import '../index.css';
import {Spring} from "react-spring/renderprops";

const ProfileImage = (props) => {
  const {offset} = props;
  const opacity =  offset < 0.5 ? '20' : '';
  const scale = 100 -  offset * 90;
  const backgroundScale = 204 * scale / 100  ;

  return(
    <div
      className='animatedComponent'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: backgroundScale, height: backgroundScale,
        opacity: (1 - offset),
        margin: 20,
        backgroundColor: `#ffffff${opacity}`, borderRadius: backgroundScale / 2}}>
      <Spring
        config={{delay: 900, tension: 100, friction: 20}}
        from={{ value: 0 }}
        to={{ value: 1 }}>
        {props => <div style={{
          width: 194,
          height: 194,
          borderRadius: 97,
          opacity: props.value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            alt=""
            src={require('../assets/images/satr-png.png')}
            style={{
              width: '100%',
              paddingBottom: 11,
              objectFit: 'cover'}} />
        </div>}
      </Spring>
    </div>
  )
};

export default ProfileImage
