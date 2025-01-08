import React from "react";

const Cell = ({
  cell,
  grid,
  setGridState,
  placingStart,
  setPlacingStart,
  handleCellClick,
}) => {
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
        console.log("cell clicked", cell.row, cell.col);
        handleCellClick(
          cell.row,
          cell.col,
          grid,
          setGridState,
          placingStart,
          setPlacingStart
        );
        console.log("Props passed to Cell:", {
          cell,
          grid,
          placingStart,
          handleCellClick,
        });
      }}
    ></div>
  );
};

export default Cell;
