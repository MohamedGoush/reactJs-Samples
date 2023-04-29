import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(1); // Array Destructuring

  return (
    <div>
      <button onClick={() => setCount(count + 2)}> Count{count}</button>
    </div>
  );
}

export default HookCounter;
