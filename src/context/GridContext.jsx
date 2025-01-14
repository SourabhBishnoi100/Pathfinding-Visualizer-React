import React, { useState, useEffect, createContext, useContext } from "react";
import initializeGrid from "../utils/intitalizeGrid";

const GridContext = createContext();

export const GridContextProvider = ({ children }) => {
  const rows = 31;
  const columns = 61;

  const [grid, setGridState] = useState(() => initializeGrid(rows, columns));
  const [placingStart, setPlacingStart] = useState(true);
  const [placingEnd, setPlacingEnd] = useState(false);
  const [placingObstacle, setPlacingObstacle] = useState(false);

  return (
    <GridContext.Provider
      value={{
        grid,
        setGridState,
        placingStart,
        setPlacingStart,
        placingEnd,
        setPlacingEnd,
        placingObstacle,
        setPlacingObstacle,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

export const useGridContext = () => useContext(GridContext);
