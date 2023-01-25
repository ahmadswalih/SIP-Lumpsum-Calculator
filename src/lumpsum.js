import React, { useState } from 'react';

const LumpSumCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [time, setTime] = useState(0);
  const [lumpSum, setLumpSum] = useState(0);


  //Calculation function :- rate is constant here (ie is 25.2)
  // The equation used here is A=P*(1+(rate of Interest/100)^t) . where A= final Amount,P= Principal & t= time period
  const handleCalculate = () => {
    setLumpSum((principal * Math.pow((1+(25.2/100)),time) ));//rate of interest is constant here (ie is 25.2)
    console.log(lumpSum);
    
  };

  return (
    <div>
      <h1>Lumpsum Calculator</h1>
      <label>
        Principal:
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </label>
      <br />
      <label>
        Time Period:
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      <br />
      <label>
        Lump Sum:
        <input  value={lumpSum} readOnly />
      </label>
    </div>
  );
};

export default LumpSumCalculator;
