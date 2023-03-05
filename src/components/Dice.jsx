import React, { useState } from 'react';
import Img0 from '../assets/images/dice-empty.png';
import Img1 from '../assets/images/dice1.png';
import Img2 from '../assets/images/dice2.png';
import Img3 from '../assets/images/dice3.png';
import Img4 from '../assets/images/dice4.png';
import Img5 from '../assets/images/dice5.png';
import Img6 from '../assets/images/dice6.png';

function Dice() {
  const [dice, setDice] = useState(Img1);

  //saving images in an array and iterating over its length after instead of using a switch for every possible random number scenario.
  const dices = [Img0, Img1, Img2, Img3, Img4, Img5, Img6];
  const randomNumber = Math.floor(Math.random() * dices.length);

  const draw = () => {
    setDice(Img0);
    setTimeout(() => setDice(dices[randomNumber]), 1000);
  };

  return (
    <div>
      <img className="dice" onClick={draw} src={dice} alt="dice" />
    </div>
  );
}

export default Dice;
