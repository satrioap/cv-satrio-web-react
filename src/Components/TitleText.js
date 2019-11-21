import React from 'react';

const TitleText = (props) => {
  const {title} = props;
  return(
    <div>
      <p style={{fontSize: 28}}>{title}</p>
    </div>
  );
};

export default TitleText;
