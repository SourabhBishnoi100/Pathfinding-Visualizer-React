import React from "react";
import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [algorithmExecuting, setExecuting] = useState(false);
  const [startCell, setStartCell] = useState(null);
  const [endCell, setEndCell] = useState(null);
  const [algorithm, setAlgorithm] = useState("astar");
  return (
    <GlobalContext.Provider
      value={{
        algorithmExecuting,
        setExecuting,
        startCell,
        setStartCell,
        algorithm,
        setAlgorithm,
        endCell,
        setEndCell,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
