import React from 'react';

function BoxColor({ r, g, b }) {
  const backGround = 'rgb(' + r + ',' + g + ',' + b + ')';
  const divStyle = { background: backGround };

  return (
    <div className="boxColor" style={divStyle}>
      {backGround}
    </div>
  );
}

export default BoxColor;
