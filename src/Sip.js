import React, { useState } from 'react';

function SIPCalculator() {
  const [principal, setPrincipal] = useState(0);
  const [years, setYears] = useState(0);
  const [sip, setSip] = useState(0);

  //Calculation Function :- rate is constant here (ie is 17.04).
  //The equation used here is A = P*(1+I)^t*(1+I)/I . where A= final SIP Amount, I = interest , P = principal value & t= time 
  const calculateSIP = () => {
   const  interest = 17.04 / 1200; //change the rate of interest here (ie is 17.04) 
   const  sipAmount = Math.round(principal * (Math.pow((1 + interest), years * 12) - 1) * (1 + interest) / interest);
    setSip(sipAmount);
  }

  return (
    <div>
      <h1>SIP Calculator</h1>
      <label>Principal:</label>
      <input type="number" onChange={e => setPrincipal(e.target.value)} />
      <br />
      <label>Time Period</label>
      <input type="number" onChange={e => setYears(e.target.value)} />
      <br />
      <button onClick={calculateSIP}>Calculate SIP</button>
      <br />
      <label>SIP Amount:</label>
      <input type="number" value={sip} readOnly />
    </div>
  );
}

export default SIPCalculator;
