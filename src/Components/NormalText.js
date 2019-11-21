import React from 'react';

const NormalText = (props) => {
  const {title} = props;
  return(
    <div>
      <p style={{fontSize: 24}}>{title}</p>
    </div>
  );
};

export default NormalText;
