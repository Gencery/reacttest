import React, { useState, useRef, useEffect } from "react";

export default function Test() {
  const [num, setNum] = useState(0);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [num]);

  return (
    <>
      <p>Render no: {renderCount.current}</p>
      <p>State: {num}</p>

      <button onClick={() => {
        setNum(num + 1)

      }}>Click to increment</button>

    </>
  );
}