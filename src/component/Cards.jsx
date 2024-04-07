import React, { useState } from 'react';
import Card1 from '../image/image1.jpg';
import Card2 from '../image/image2.jpg';
import Card3 from '../image/image3.jpg';
import './CardsStyle.css';

function Cards() {
  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);
  const [showParagraph3, setShowParagraph3] = useState(false);

  const handleCheckboxChange = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setShowParagraph1(!showParagraph1);
        break;
      case 2:
        setShowParagraph2(!showParagraph2);
        break;
      case 3:
        setShowParagraph3(!showParagraph3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="cards-holder">
      <div className="card1-container">
        <img src={Card1} alt="illus" />
        <h1>I'm a designer looking to</h1>
        <h2>share my work</h2>
        {showParagraph1 && (
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Pariatur, molestias eius <br /> delectus omnis facilis impedit!
          </p>
        )}
        <input
          type="checkbox"
          name="card1"
          id="card1"
          checked={showParagraph1}
          onChange={() => handleCheckboxChange(1)}
        />
      </div>
      <div className="card2-container">
        <img src={Card2} alt="illus2" />
        <h1>I'm looking to hire a </h1>
        <h2>designer</h2>
        {showParagraph2 && (
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Architecto cupiditate <br /> atque quia maxime! Quos, quasi!
          </p>
        )}
        <input
          type="checkbox"
          name="card2"
          id="card2"
          checked={showParagraph2}
          onChange={() => handleCheckboxChange(2)}
        />
      </div>
      <div className="card3-container">
        <img src={Card3} alt="illus3" />
        <h1>I'm looking for design </h1>
        <h2>inspiration</h2>
        {showParagraph3 && (
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
            Excepturi quaerat, <br /> deserunt dignissimos ipsam tempora <br />
            exercitationem.
          </p>
        )}
        <input
          type="checkbox"
          name="card3"
          id="card3"
          checked={showParagraph3}
          onChange={() => handleCheckboxChange(3)}
        />
      </div>
    </div>
  );
}

export default Cards;
