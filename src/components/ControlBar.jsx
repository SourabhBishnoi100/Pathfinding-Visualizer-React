import React, { useState, useEffect } from "react";
import { useGridContext } from "../context/GridContext.jsx";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import { runPathFinding } from "../algorithms/runPathfinding.js";
import { resetGrid, clearObstacles, clearPath } from "../utils/reset.js";
import { generateMaze } from "../mazeGeneration/generateMaze.js";
import ToggleObstacles from "./buttons/ToggleObstacles.jsx";

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

  // useEffect(() => {}, [erasingObstacles]);

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
            if (!algorithmExecuting && !generatingMaze) {
              setGeneratingMaze(true);
              generateMaze(grid, setGridState, setGeneratingMaze, maze);
            }
          }}
        >
          Generate Maze
        </button>
      </div>

      {/* Reset/Clear */}
      <div className="flex gap-2">
        <ToggleObstacles />
        <button
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded"
          onClick={() => {
            resetGrid(setGridState, setPlacingStart, setExecuting);
          }}
        >
          Reset Grid
        </button>
        <button
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded"
          onClick={() => {
            clearObstacles(setGridState, setPlacingObstacle, setExecuting);
          }}
        >
          Clear Obstacles
        </button>
        <button
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded"
          onClick={() => {
            clearPath(setGridState, setExecuting);
          }}
        >
          Clear Path
        </button>
      </div>
    </div>
  );
};

export default ControlBar;
