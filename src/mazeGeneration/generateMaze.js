import { primsMaze } from "./primsMaze";
import { randomMaze } from "./randomMaze";

export const generateMaze = (setGridState, Maze) => {
  if (Maze === "randomMaze") {
    randomMaze(setGridState);
  } else if (Maze === "primsMaze") {
    primsMaze(setGridState);
  }
};
