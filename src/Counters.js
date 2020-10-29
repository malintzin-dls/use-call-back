import React, { useState, useCallback, useEffect } from "react";

import AddButton from "./AddButton";

const incrementACounter = new Set();
const addAToBCounter = new Set();

export default function Counters() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(10);

  const incrementA = () => setA((A) => A + 1);

  const addAToB = () => setB((B) => B + A);

  useEffect(() => {
    incrementACounter.add(incrementA);
  }, [incrementA]);

  useEffect(() => {
    addAToBCounter.add(addAToB);
  }, [addAToB]);

  return (
    <div>
      <div style={{ margin: 50 }}>
        <div>A State : {A}</div>
        <AddButton handleOnClick={incrementA} title={"Increment A"} />
        <div> Newly Created incrementA: {incrementACounter.size} </div>
      </div>
      <div style={{ margin: 50 }}>
        <div>B State : {B}</div>
        <AddButton handleOnClick={addAToB} title={"Add A to B"} />
        <div> Newly Created addAToB: {addAToBCounter.size} </div>
      </div>
    </div>
  );
}
