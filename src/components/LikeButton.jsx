import React, { useState } from 'react';

function LikeButton() {
  const [likeValue, setLikeValue] = useState(0);

  const sum = () => {
    setLikeValue(likeValue + 1);
  };

  return (
    <div>
      <button className="likeBtn" onClick={sum}>
        {likeValue} Likes
      </button>
    </div>
  );
}

export default LikeButton;
