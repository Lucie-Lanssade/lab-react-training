import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [picture, setPicture] = useState(false);

  const handleClick = () => setPicture(!picture);

  return (
    <div>
      <img
        src={picture ? `${img}` : `${imgClicked}`}
        onClick={handleClick}
        alt="some pic"
      ></img>
    </div>
  );
}

export default ClickablePicture;
