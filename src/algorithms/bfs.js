import {
  renderIsQueued,
  renderIsVisited,
  animatePath,
} from "../utils/animateGrid.js";
import { getNeighbours } from "../utils/getNeighbours.js";
import { sleep } from "../utils/sleep.js";

export const bfs = async (startCell, grid, setGridState, speed) => {
  const queue = [];
  const total_rows = grid.length;
  const total_col = grid[0].length;

  queue.push(startCell);

  while (queue.length > 0 && queue.length < total_col * total_rows) {
    const currentCell = queue.shift();
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
        queue.push(neighbour);

        neighbour.prevCell = currentCell;
      }
    }

    // await sleep(speed);

    await new Promise((resolve) => setTimeout(resolve, speed));

    //Sets the state of current cell to isVisited = true and renders the change
  }
};
