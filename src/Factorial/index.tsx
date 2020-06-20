import React, { useState } from "react";
import { getFactorial } from "./factorialCalculator";

const Factorial = () => {
  const [targetNumber, setTargetNumber] = useState(0);
  const [resultFactorial, setResultFactorial] = useState("");

  const displayFactorial = () => {
    const f = getFactorial(targetNumber);
    setResultFactorial(f);
  };

  return (
    <div>
      <div>{resultFactorial}</div>
      <div>
        <input
          onChange={evt => {
            setTargetNumber(evt.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={displayFactorial}>Calculate</button>
      </div>
    </div>
  );
};

export default React.memo(Factorial);
