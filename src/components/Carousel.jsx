import React, { useState } from 'react';

function Carousel({ images }) {
  const [image, setImage] = useState(0);

  const leftBtn = () => {
    setImage(image - 1);
  };

  const rightBtn = () => {
    setImage(image + 1);
  };

  return (
    <div>
      <button onClick={leftBtn}>Left</button>
      <img src={images[image]} alt="some pic" />
      <button onClick={rightBtn}>Rigth</button>
    </div>
  );
}

export default Carousel;
