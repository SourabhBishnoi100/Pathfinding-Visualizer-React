import { astar } from "./astar/astar.js";
import { bfs } from "./bfs.js";
import { dfs } from "./dfs.js";

export const runPathFinding = (
  algorithm,
  startCell,
  endCell,
  grid,
  setGridState,
  speed
) => {
  if (algorithm === "bfs") {
    bfs(startCell, grid, setGridState, speed);
  } else if (algorithm === "astar") {
    astar(startCell, endCell, grid, setGridState, speed);
  } else if (algorithm === "dfs") {
    dfs(startCell, grid, setGridState, speed);
  }
};
