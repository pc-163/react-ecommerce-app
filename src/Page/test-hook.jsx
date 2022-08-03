import React, { useState, useEffect } from 'react';

function Test() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 10);
  }, [count]); // <- add the count variable here


  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((e) => e + 10)}>
        Click me 
      </button>
      <p>Count: {calculation}</p>
    </div>
  );
}


export default Test