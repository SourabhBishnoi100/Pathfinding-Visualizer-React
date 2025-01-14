import { primsMaze } from "./primsMaze";
import { randomMaze } from "./randomMaze";
import { recursiveBacktrackingMaze } from "./recursiveBacktrackingMaze";

export const generateMaze = (grid, setGridState, setGeneratingMaze, maze) => {
  if (maze === "randomMaze") {
    randomMaze(grid, setGridState, setGeneratingMaze);
  } else if (maze === "primsMaze") {
    primsMaze(grid, setGridState, setGeneratingMaze);
  } else if (maze === "recursiveBacktrackingMaze") {
    recursiveBacktrackingMaze(grid, setGridState, setGeneratingMaze);
  }
};
