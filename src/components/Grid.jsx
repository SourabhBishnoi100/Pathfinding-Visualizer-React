import React from "react";
import Cell from "./Cell";

const Grid = ({ grid }) => {
  return (
    <div className="flex flex-col grow mx-8 my-4 bg-gray-100 w-4/5">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex grow">
          {row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} cell={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
