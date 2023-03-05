import React from 'react';

function Random({ min, max }) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="randomContainer">
      <p className="random">
        Random value between {min} and {max} {'=>'} {result}
      </p>
    </div>
  );
}

export default Random;
