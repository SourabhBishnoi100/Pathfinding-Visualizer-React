import React from "react";
import Cell from "./Cell";

const Grid = ({ grid, cellClick }) => {
  console.log("grid updated");
  return (
    <div className="flex flex-col grow mx-8 my-4 bg-gray-100 w-4/5 select-none">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex grow">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              cell={cell}
              grid={grid}
              cellClick={cellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
