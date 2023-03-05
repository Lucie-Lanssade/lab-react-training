import React from 'react';

function Rating({ children }) {
  const rating = Number(children);
  let evaluation = '';
  let emptyStars = (Math.round(rating) - 5) * -1;
  for (let i = 0; i < Math.round(rating); i++) {
    evaluation += '★';
  }
  for (let i = 0; i < emptyStars; i++) {
    evaluation += '☆';
  }
  return (
    <div>
      <p>{evaluation}</p>
    </div>
  );
}

export default Rating;
