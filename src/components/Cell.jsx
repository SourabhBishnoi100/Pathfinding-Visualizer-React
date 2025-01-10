import React from "react";
import { useDragState } from "../context/DragContext";

const Cell = ({ cell, cellClick }) => {
  const { isDragging, setIsDragging } = useDragState();
  let backgroundColor = "white";
  if (cell.isStart) backgroundColor = "red";
  else if (cell.isEnd) backgroundColor = "green";
  else if (cell.isObstacle) backgroundColor = "black";

  return (
    <div
      className="text-sm border border-gray-400 grow flex items-center
      justify-center hover:scale-125 hover:cursor-pointer hover:shadow-inner select-none"
      style={{
        backgroundColor,
      }}
      onClick={() => {
        cellClick(cell.row, cell.col);
      }}
      onMouseDown={() => {
        setIsDragging(true);
        cellClick(cell.row, cell.col);
      }}
      onMouseEnter={() => {
        isDragging && cellClick(cell.row, cell.col);
      }}
    ></div>
  );
};

export default Cell;
