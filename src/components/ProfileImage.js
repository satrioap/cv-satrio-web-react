import React from "react";
import '../index.css';
import {Spring} from "react-spring/renderprops";

const ProfileImage = (props) => {
  const {offset} = props;
  const opacity =  offset < 380 ? '20' : '';

  return(
    <div
      className='animatedComponent'
      style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 204, height: 204,
      backgroundColor: `#ffffff${opacity}`, borderRadius: 102}}>
      <Spring
        config={{delay: 900, tension: 100, friction: 20}}
        from={{ value: 0 }}
        to={{ value: 1 }}>
        {props => <div style={{
          width: 194,
          height: 194,
          borderRadius: 97,
          opacity:props.value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            alt=""
            src={require('../assets/images/satr-png.png')}
            style={{ width: '100%', paddingBottom: 11}} />
        </div>}
      </Spring>
    </div>
  )
};

export default ProfileImage
