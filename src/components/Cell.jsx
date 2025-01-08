import React from "react";

const Cell = ({ cell, cellClick }) => {
  let backgroundColor = "white";
  if (cell.isStart) backgroundColor = "red";
  else if (cell.isEnd) backgroundColor = "green";
  else if (cell.isObstacle) backgroundColor = "black";

  return (
    <div
      className="text-sm border border-gray-400 grow flex items-center
      justify-center hover:scale-125 hover:cursor-pointer hover:shadow-inner"
      style={{
        backgroundColor,
      }}
      onClick={() => {
        cellClick(cell.row, cell.col);
      }}
    ></div>
  );
};

export default Cell;
