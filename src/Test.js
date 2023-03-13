import React, { useState, useRef, useEffect } from "react";

import View from "./View";

export default function Test() {
  const [num, setNum] = useState(0);
  const renderCount = useRef(0);

  const [list, setList] = useState([
    { id: 0, count: 0 },
    { id: 1, count: 0 },
    { id: 2, count: 0 },
  ]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [num]);

  function handleIncrement(index) {
    setList(
      list.filter((item, newIndex) => {
        return index == newIndex;
      })
    );
  }

  return (
    <>
      <p>Render no: {renderCount.current}</p>
      <p>State: {num}</p>

      <button onClick={() => {

        setNum(num + 1)

      }}>Click to increment</button>
      <View list={list} handleIncrement={handleIncrement} />
    </>
  );
}