import React from "react";
import '../index.css';
import {Spring} from "react-spring/renderprops";

const ProfileAvatar = (props) => {
  const {offset, size} = props;
  const threshold = (offset >= 2 ? 0 : offset >= 1 ? (2 - offset) : offset);
  const backgroundScale = 48 + (48 * 1.5 * threshold);

  const opacity =  (size ? 0 : offset < 0.5 || offset > 1.5 ? '00' : '20');

  return(
    <div
      className='animatedComponent'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: backgroundScale + 8, height: backgroundScale + 8,
        opacity: 1,
        margin: 20,
        backgroundColor: `#ffffff${opacity}`, borderRadius: (backgroundScale + 8) / 2}}>
      <Spring
        config={{delay: 900, tension: 100, friction: 20}}
        from={{ value: 0 }}
        to={{ value: 1 }}>
        {props => <div style={{
          width: backgroundScale,
          height: backgroundScale,
          borderRadius: backgroundScale / 2,
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            alt=""
            src={require('../assets/images/satr-png.png')}
            style={{
              width: backgroundScale,
              paddingBottom: 7,
              objectFit: 'cover'}} />
        </div>}
      </Spring>
    </div>
  )
};

export default ProfileAvatar
