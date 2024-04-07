import React from 'react';
import './selectionStyle.css';
import Cards from '../component/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

function Selection() {
  const navigate = useNavigate();
  const transform = () => {
    navigate('/mainpage');
  };
  return (
    <div>
      <div className="top-line">
        <h1>Nebula</h1>
        <div className="arrow">
          <a href="/profile">
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
      </div>
      <div className="center-space">
        <h1>What brings you to Nebula?</h1>
        <p>
          Select the options that describes you. Don't worry, you can explore
          other options later.
        </p>
      </div>
      <div className="card-container">
        <Cards />
      </div>
      <div className="last">
        <h1>Anything else? You can select multiple</h1>
        <button type="submit" className="finish" onClick={transform}>
          Finish
        </button>
        <a href="/profile">or Press Return</a>
      </div>
    </div>
  );
}

export default Selection;
