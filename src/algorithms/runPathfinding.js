import { bfs } from "./bfs.js";

export const runPathFinding = (algorithm, startCell, grid, setGridState) => {
  if (algorithm === "BFS") {
    bfs(startCell, grid, setGridState);
  }
};
