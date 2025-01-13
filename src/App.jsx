import React from "react";
import { useState } from "react";
import "./App.css";

import { handleCellClick } from "./utils/handleCellClick";
import Grid from "./components/Grid";
import ControlBar from "./components/ControlBar";
import { useGridContext } from "./context/GridContext";
import { useGlobalContext } from "./context/GlobalContext";

const App = () => {
  const {
    grid,
    setGridState,
    placingStart,
    setPlacingStart,
    placingEnd,
    setPlacingEnd,
    placingObstacle,
    setPlacingObstacle,
  } = useGridContext();

  const { setStartCell, algorithmExecuting, setEndCell } = useGlobalContext();

  const cellClick = (row, col) => {
    if (!algorithmExecuting) {
      handleCellClick(
        row,
        col,
        grid,
        setGridState,
        placingStart,
        setPlacingStart,
        placingEnd,
        setPlacingEnd,
        placingObstacle,
        setPlacingObstacle,
        setStartCell,
        setEndCell
      );
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      {/* Control Bar */}
      <ControlBar />

      {/* Grid Container */}
      <Grid grid={grid} cellClick={cellClick} />
    </div>
  );
};

export default App;
