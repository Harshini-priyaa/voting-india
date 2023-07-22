import React, { useState } from 'react';

const NumberInput = () => {
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const inputNumber = e.target.value;
    // Remove any non-numeric characters from the input
    const cleanedNumber = inputNumber.replace(/\D/g, '');
    setNumber(cleanedNumber);
  };

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        pattern="[0-9]{12}"
        maxLength="12"
        title="Please enter a 12-digit number"
      />
      {number.length === 12 ? <p>Valid 12-digit number entered: {number}</p> : null}
    </div>
  );
};

export default NumberInput;