import React, { useState } from 'react';
import './profileStyle.css';
import { useNavigate } from 'react-router';

function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const selectionPage = () => {
    navigate('/selection');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="mark">Nebula</div>
      <div className="profile-container">
        <h1>Welcome! Let's create your profile</h1>
        <p>Let others get to know you better! You can do these later</p>
        <div className="avatar-container">
          <div className="avatar">
            <h2>Add an avatar</h2>
            <div className="avatar-img">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="avatar-image"
                />
              ) : (
                <div className="avatar-placeholder">+</div>
              )}
            </div>
          </div>
          <div className="link">
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              value=""
            />
            <a href="/"> → Or choose one of our defaults</a>
          </div>
        </div>
        <div className="location">
          <h3>Add your location</h3>
          <input type="text" placeholder="Enter a location" />
        </div>
        <div className="outer">
          <button className="next" onClick={selectionPage}>
            Next
          </button>
          <a href="/">or Press RETURN</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
