import React from "react";
import { useState } from "react";
import initializeGrid from "./utils/intitalizeGrid";
import { handleCellClick } from "./utils/handleCellClick";
import Grid from "./components/Grid";

const App = () => {
  const rows = 25;
  const columns = 50;

  const [grid, setGridState] = useState(initializeGrid(rows, columns));
  const [placingStart, setPlacingStart] = useState(true);

  console.log(placingStart);

  const cellClick = (row, col) => {
    handleCellClick(
      row,
      col,
      grid,
      setGridState,
      placingStart,
      setPlacingStart
    );
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      {/* Control Bar */}
      <div className="w-full p-4 mb-4 bg-gray-200 text-center">
        <p>Control Bar</p>
      </div>

      {/* Grid Container */}
      <Grid grid={grid} cellClick={cellClick} />
    </div>
  );
};

export default App;
