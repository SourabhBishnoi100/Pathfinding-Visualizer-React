import {
  renderIsQueued,
  renderIsVisited,
  animatePath,
} from "../utils/animateGrid.js";
import { getNeighbours } from "../utils/getNeighbours.js";
import { sleep } from "../utils/sleep.js";

export const dfs = async (startCell, grid, setGridState, speed) => {
  const stack = [];
  const total_rows = grid.length;
  const total_col = grid[0].length;

  stack.push(startCell);

  while (stack.length > 0 && stack.length < total_col * total_rows) {
    const currentCell = stack.pop();
    renderIsVisited(currentCell, setGridState);
    currentCell.isVisited = true;

    if (currentCell.isEnd) {
      // If the end cell is reached, animate the path
      animatePath(currentCell, setGridState);
      return;
    }

    const neighbours = getNeighbours(total_rows, total_col, currentCell, grid);

    for (let neighbour of neighbours) {
      if (
        !neighbour.isVisited &&
        !neighbour.isObstacle &&
        !neighbour.isQueued
      ) {
        renderIsQueued(neighbour, setGridState);
        neighbour.isQueued = true;
        stack.push(neighbour);

        neighbour.prevCell = currentCell;
      }
    }

    // await sleep(speed);

    await new Promise((resolve) => setTimeout(resolve, speed));

    //Sets the state of current cell to isVisited = true and renders the change
  }
};
