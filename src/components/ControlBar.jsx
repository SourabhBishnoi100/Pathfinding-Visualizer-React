import React from "react";
import { useGridContext } from "../context/GridContext.jsx";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import { runPathFinding } from "../algorithms/runPathfinding.js";

const ControlBar = () => {
  const { grid, setGridState } = useGridContext();
  const { startCell, algorithm } = useGlobalContext();

  return (
    <div className="w-full p-4 mb-4 bg-gray-200 text-center">
      <p>Control Bar</p>
      <button
        onClick={() => {
          console.log(startCell.isStart);
          if (startCell.isStart) {
            runPathFinding(algorithm, startCell, grid, setGridState);
          }
        }}
      >
        Run Algorithm
      </button>
    </div>
  );
};

export default ControlBar;
