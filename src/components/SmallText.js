import React from 'react';

const SmallText = (props) => {
  const {title, style} = props;
  return(
    <div>
      <p style={{fontSize: 20, fontWeight: 300, textAlign: 'right', ...style}}>{title}</p>
    </div>
  );
};

export default SmallText;
