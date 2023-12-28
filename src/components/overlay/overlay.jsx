import React, { useState } from 'react';
import './OverlayComponent.css'; // You can create a separate CSS file for styling

const OverlayComponent = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleOverlayClick = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div>
      <button onClick={handleOverlayClick}>Toggle Overlay</button>

      {isOverlayVisible && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="centered-component">
            {/* Your centered component content goes here */}
            <p>This is a centered component</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverlayComponent;
