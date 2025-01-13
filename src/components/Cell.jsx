import React from "react";
import { useDragState } from "../context/DragContext";
import { useGlobalContext } from "../context/GlobalContext";

const Cell = ({ cell, cellClick }) => {
  const { isDragging, setIsDragging } = useDragState();
  const { algorithmExecuting, setStartCell } = useGlobalContext();
  // let backgroundColor = "white";
  // if (cell.isStart) backgroundColor = "red";
  // else if (cell.isEnd) backgroundColor = "green";
  // else if (cell.isObstacle) backgroundColor = "black";
  // else if (!cell.isStart && !cell.isEnd && !cell.isVisited && cell.isQueued)
  //   backgroundColor = "tomato";
  // else if (!cell.isStart && !cell.isEnd && cell.isVisited)
  //   backgroundColor = "cyan";

  // if (!cell.isStart && !cell.isEnd && cell.isPath) backgroundColor = "blue";
  return (
    <div
      className={` border border-gray-400 grow items-center
      justify-center hover:scale-125 hover:cursor-pointer hover:shadow-inner ${
        cell.isStart
          ? "start"
          : cell.isEnd
          ? "end"
          : cell.isObstacle
          ? "obstacle"
          : cell.isPath
          ? "path"
          : cell.isVisited
          ? "visited"
          : cell.isQueued
          ? "queued"
          : ""
      }`}
      // style={{
      //   backgroundColor,
      // }}
      onClick={() => {
        if (!algorithmExecuting) {
          cellClick(cell.row, cell.col, setStartCell);
        }
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
