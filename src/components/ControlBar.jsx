import React, { useState } from "react";
import { useGridContext } from "../context/GridContext.jsx";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import { runPathFinding } from "../algorithms/runPathfinding.js";
import { resetGrid, clearObstacles, clearPath } from "../utils/reset.js";
import { generateMaze } from "../mazeGeneration/generateMaze.js";

const ControlBar = () => {
  const {
    grid,
    setGridState,
    setPlacingStart,
    setPlacingEnd,
    setPlacingObstacle,
  } = useGridContext();
  const {
    startCell,
    setStartCell,
    algorithm,
    algorithmExecuting,
    setExecuting,
    setAlgorithm,
    endCell,
    setEndCell,
    maze,
    setMaze,
    generatingMaze,
    setGeneratingMaze,
  } = useGlobalContext();
  const [speed, setSpeed] = useState(1);

  return (
    <div className="w-full flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
      {/* Algorithm Selector */}
      <select
        className="p-2 rounded bg-gray-700 text-white"
        onChange={(e) => setSpeed(e.target.value)}
      >
        <option value="1">Fast</option>
        <option value="80">Medium</option>
        <option value="300">Slow</option>
      </select>
      <select
        className="p-2 rounded bg-gray-700 text-white"
        onChange={(e) => setAlgorithm(e.target.value)}
      >
        <option value="astar">A* Search</option>
        <option value="bfs">Breadth-First Search</option>
        <option value="dfs">Depth-First Search</option>
        <option value="dijkstra">Dijkstra's Algorithm</option>
      </select>

      <div className="w-auto p-2  bg-red-500 text-center rounded-sm hover:bg-red-600">
        <button
          onClick={() => {
            if (startCell.isStart && !generatingMaze) {
              setExecuting(true);
              runPathFinding(
                algorithm,
                startCell,
                endCell,
                grid,
                setGridState,
                speed
              );
            }
          }}
        >
          Run Algorithm
        </button>
      </div>
      {/* Action Buttons */}
      {/* <div className="flex justify-around">
        <button
          // onClick={() => setPlacingStart(true)}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded"
          >
          Set Start
          </button>
          <button
          // onClick={() => setPlacingEnd(true)}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded"
          >
          Set End
          </button>
          <button
          // onClick={() => setPlacingObstacle(true)}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded"
          >
          Place Obstacles
          </button>
          </div> */}

      <select
        className="p-2 rounded bg-gray-700 text-white"
        onChange={(e) => setMaze(e.target.value)}
      >
        <option value="randomMaze">Random Maze</option>
        {/* 
        <option value="dijkstra">Dijkstra's Algorithm</option>
        
        */}
        <option value="recursiveBacktrackingMaze">
          Recursive Backtracking Maze
        </option>
        <option value="primsMaze">Prims Maze Generation</option>
      </select>

      <div className="w-auto p-2  bg-red-500 text-center rounded-sm hover:bg-red-600">
        <button
          onClick={() => {
            setGeneratingMaze(true);
            if (!algorithmExecuting) {
              generateMaze(grid, setGridState, setGeneratingMaze, maze);
            }
          }}
        >
          Generate Maze
        </button>
      </div>

      {/* Reset/Clear */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            resetGrid(setGridState, setPlacingStart, setExecuting);
          }}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded"
        >
          Reset Grid
        </button>
        <button
          onClick={() => {
            clearObstacles(setGridState, setPlacingObstacle, setExecuting);
          }}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded"
        >
          Clear Obstacles
        </button>
        <button
          onClick={() => {
            clearPath(setGridState, setExecuting);
          }}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded"
        >
          Clear Path
        </button>
      </div>
    </div>
  );

  //   return (
  //     <div className="w-full p-4 mb-4 bg-gray-200 text-center">
  //       <p>Control Bar</p>
  //       <button
  //         onClick={() => {
  //           if (startCell.isStart) {
  //             setExecuting(true);
  //             runPathFinding(algorithm, startCell, grid, setGridState, speed);
  //           }
  //         }}
  //       >
  //         Run Algorithm
  //       </button>
  //     </div>
  // );
};

export default ControlBar;
