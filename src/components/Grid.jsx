import React from "react";
import Cell from "./Cell";

const Grid = ({
  grid,
  setGridState,
  placingStart,
  setPlacingStart,
  handleCellClick,
}) => {
  console.log("grid updated");
  return (
    <div className="flex flex-col grow mx-8 my-4 bg-gray-100 w-4/5">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex grow">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              cell={cell}
              grid={grid}
              setGridState={setGridState}
              placingStart={placingStart}
              setPlacingStart={setPlacingStart}
              handleCellClick={handleCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
