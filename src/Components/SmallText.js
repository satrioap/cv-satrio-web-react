import React from 'react';

const SmallText = (props) => {
  const {title} = props;
  return(
    <div>
      <p style={{fontSize: 20}}>{title}</p>
    </div>
  );
};

export default SmallText;
