import React, { useContext } from "react";
import { Store } from "./store";

export default function Counter(props) {
  // const { state, dispatch } = useContext(Store);
  const { counter, setCounter, nama, setNama } = useContext(Store);

  async function Nambahin() {
    try {
      // await fetch...
      // dispatch({ type: "increment", payload: 1 })
    } catch (error) {}
  }

  return (
    <>
      <h1>{nama}</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Tambahin</button>
    </>
  );

  // return (
  //   <>
  //     <h1>{state.nama}</h1>
  //     <h1>{state.counter}</h1>
  //     <button onClick={() => Nambahin()}>
  //       Tambahin
  //     </button>
  //   </>
  // );
}
