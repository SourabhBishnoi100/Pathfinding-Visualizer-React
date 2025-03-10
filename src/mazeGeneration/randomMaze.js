import { renderIsObstacle } from "../utils/animateGrid.js";

export const randomMaze = async (grid, setGridState, setGeneratingMaze) => {
  const newGrid = [...grid];
  for (let row of newGrid) {
    for (let cell of row) {
      if (Math.random() * 10 < 1.5 && !cell.isStart && !cell.isEnd) {
        cell.isObstacle = true;
        renderIsObstacle(cell, setGridState);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 1));
  }
  setGridState(newGrid);
  setGeneratingMaze(false);
};
