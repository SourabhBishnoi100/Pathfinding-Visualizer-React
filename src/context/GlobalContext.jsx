import React from "react";
import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [algorithmExecuting, setExecuting] = useState(false);
  const [startCell, setStartCell] = useState(null);
  const [endCell, setEndCell] = useState(null);
  const [algorithm, setAlgorithm] = useState("astar");
  const [maze, setMaze] = useState("randomMaze");
  const [generatingMaze, setGeneratingMaze] = useState(false);
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
        maze,
        setMaze,
        generatingMaze,
        setGeneratingMaze,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
