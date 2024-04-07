import React from 'react';
import './signupStyle.css';
import Image from '../image/nebula.jpg';
import { useNavigate } from 'react-router';

function SignUpForm() {
  const navigate = useNavigate();
  const teleport = () => {
    navigate('/profile');
  };
  return (
    <div className="container">
      <div className="left-side">
        <img src={Image} alt="Nebula" />
      </div>
      <div className="right-side">
        <span className="member">
          Already a member?{' '}
          <a href="/signin" className="anchor0">
            Sign In
          </a>
        </span>
        <div className="dribble">
          <h1>Sign up to Nebula</h1>
          <ul>
            <li> Username has already taken </li>
          </ul>
        </div>
        <form action="submit" method="post" style={{ display: 'grid' }}>
          <div className="txt-container">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
              />
            </div>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="6+ Password"
            />
          </div>
          <span className="checkbox">
            <input type="checkbox" />
            <h6>
              Creating an account means you're okay with our{' '}
              <a href="/" className="anchor1">
                Terms of Service, <br /> Privacy Policy{' '}
              </a>
              and our default{' '}
              <a href="/" className="anchor2">
                Notification Settings.
              </a>
            </h6>
          </span>
          <button type="submit" className="btn" onClick={teleport}>
            Create Account
          </button>
          <h6 className="policy">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="/" className="anchor3">
              Privacy Policy <br />
            </a>{' '}
            and{' '}
            <a href="/" className="anchor4">
              Terms of Service
            </a>{' '}
            apply.
          </h6>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
