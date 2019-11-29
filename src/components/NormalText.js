import React from 'react';

const NormalText = (props) => {
  const {title, style} = props;
  return(
    <div>
      <p style={{fontSize: 24, fontWeight: 300, ...style}}>{title}</p>
    </div>
  );
};

export default NormalText;
