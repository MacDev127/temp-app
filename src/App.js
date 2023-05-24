import React, { useState } from 'react';

export const App = () => {
  // Set state
  const [temperatureValue, setTemperatureValue] = useState(20);
  const [tempColor, setTempColor] = useState('cold');

  // stop temp going over 30
  const increaseTemp = () => {
    if (temperatureValue === 30) return;
    const newTemp = temperatureValue + 1;
    //change color when temp reaches 15
    if (newTemp >= 15) {
      setTempColor('hot');
    }
    setTemperatureValue(newTemp);
  };
  // stop temp going below 0

  const decreaseTemp = () => {
    if (temperatureValue === 0) return;
    const newTemp = temperatureValue - 1;

    //change color when temp reaches 15
    if (newTemp <= 15) {
      setTempColor('cold');
    }

    setTemperatureValue(newTemp);
  };
  return (
    <div className='app-container'>
      <div className='temp-display-container'>
        <div className={`temp-display ${tempColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decreaseTemp()}>-</button>
      </div>
    </div>
  );
};

export default App;
