import React, { useState, useRef, useEffect } from "react";

export default function Test() {
  const [state, setState] = useState(0);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <p>Render no: {renderCount.current}</p>
      <p>State: {state}</p>

      <button onClick={() => {
        // setState(state + 1)
        // setState(state + 1)
        // setState(state + 1)

        setState(state + 1)
        setState(state => state + 1)
        setState(42)

      }}>Click to increment</button>

    </>
  );
}