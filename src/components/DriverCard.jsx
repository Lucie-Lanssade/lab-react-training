import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driverCardContainer">
      <div className="driverCard">
        <div>
          <img src={img} alt={name}></img>
        </div>

        <div>
          <h3>{name}</h3>
          <Rating className="rate">{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
