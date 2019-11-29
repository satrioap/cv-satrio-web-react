import React from 'react';

const TitleText = (props) => {
  const {title, style} = props;
  return(
    <div>
      <p style={{fontSize: 28, fontWeight: 300, ...style}}>{title}</p>
    </div>
  );
};

export default TitleText;
