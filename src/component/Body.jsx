import React from 'react';
import './bodyStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Body() {
  return (
    <>
      <div className="body">
        <h1 className="heading">Please verify your email...</h1>
        <div className="envelope">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
        </div>
        <p className="verify">
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <h3 className="check-email">account@refero.design</h3>
        <p className="checking">
          Click the confirmation link in that email to begin using Nebula.
        </p>
        <p className="confirm">
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. if
        </p>
        <p className="remain">
          you still don't see it, you can{' '}
          <a href="/"> resend the confirmation email.</a>
        </p>
        <p className="restart">
          Wrong email address? <a href="/"> Change it.</a>
        </p>
      </div>
    </>
  );
}

export default Body;
