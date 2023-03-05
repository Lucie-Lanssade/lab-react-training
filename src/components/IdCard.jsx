import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="cardContainer">
      <div className="cardImg">
        <img src={picture} alt={lastName}></img>
      </div>

      <div className="infos">
        <div>
          <span>First name</span> {firstName}
        </div>
        <div>
          <span>Last name</span> {lastName}
        </div>
        <div>
          <span>Gender</span> {gender}
        </div>
        <div>
          <span>Height</span> {height}
        </div>
        <div>
          <span>Birth</span> {birth.toDateString('fr-FR')}
        </div>
      </div>
    </div>
  );
}

export default IdCard;
