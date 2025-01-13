import { astar } from "./astar/astar.js";
import { bfs } from "./bfs.js";

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
  }
};
