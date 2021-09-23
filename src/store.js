import React, { createContext, useReducer, useState } from "react";

const initialState = {
  counter: 1,
  nama: "Melda belajar ngitung",
  umur: 0,
};

const reducers = (state, action) => {
  const { type, payload } = action;
  //? payload adalah data yang digunakan untuk merubah state
  //? type adalah PENANDA buat si reducer ini tau, dia harus ngelakuin proses yang mana

  switch (type) {
    case "increment":
      return { ...state, counter: state.counter + payload };
    default:
      break;
  }
};

// export const Store = createContext(initialState);

// export function StoreProvider({ children }) {
//   const [state, dispatch] = useReducer(reducers, initialState);

//   function fetchingData() {
//     //? ini fetch data dari database ataupun yg asyncronus
//   }

//   return (
//?     <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
//   );
// }

export const Store = createContext();

export function StoreProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [nama, setNama] = useState("Melda belajar ngitung");

  function fetchingData() {
    //? ini fetch data dari database ataupun yg asyncronus
    //let data = await manggilApiMasKevin
    // setState state mana yg mau diubah
  }

  return (
    <Store.Provider
      value={{ counter, setCounter, nama, setNama, fetchingData }}
    >
      {children}
    </Store.Provider>
  );
}
