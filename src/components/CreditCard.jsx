import React from 'react';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const style = {
    background: bgColor,
    color: color,
  };
  if (expirationMonth < 10) expirationMonth = '0' + expirationMonth;
  return (
    <div className="card" style={style}>
      <div className="logo">
        {type === 'Visa' ? (
          <img src={visa} alt="Visa" />
        ) : (
          <img src={mastercard} alt="Master Card" />
        )}
      </div>
      <div className="cardNum">•••• •••• •••• {number.slice(-4)}</div>
      <div className="valid">
        <p>
          Expires {expirationMonth}/{expirationYear % 1000}{' '}
        </p>
        <p>{bank}</p>
      </div>
      <div className="cardOwner">
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
