import {
  renderIsQueued,
  renderIsVisited,
  animatePath,
} from "../utils/animateGrid.js";
import { getNeighbours } from "../utils/getNeighbours.js";

export const bfs = async (startCell, grid, setGridState) => {
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
      await animatePath(currentCell, setGridState);
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
        console.log(neighbour.row, neighbour.col);
        queue.push(neighbour);

        neighbour.prevCell = currentCell;
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 0.01));

    //Sets the state of current cell to isVisited = true and renders the change
  }
};
