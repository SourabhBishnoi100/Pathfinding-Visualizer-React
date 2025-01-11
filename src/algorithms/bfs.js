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

  while (queue.length > 0 && queue.length < 10) {
    const currentCell = queue.shift();
    renderIsVisited(currentCell, grid, setGridState);

    if (currentCell.isEnd) {
      animatePath(currentCell, grid, setGridState);
      return;
    }

    const neighbours = getNeighbours(total_rows, total_col, currentCell, grid);

    for (let neighbour of neighbours) {
      if (!neighbour.isVisited && !neighbour.isObstacle) {
        renderIsQueued(neighbour, grid, setGridState);
        console.log(neighbour.row, neighbour.col);
        queue.push(neighbour);

        neighbour.prevCell = currentCell;
      }
    }

    console.log(currentCell.row, currentCell.col, currentCell.isVisited);
    await new Promise((resolve) => setTimeout(resolve, 500));

    //Sets the state of current cell to isVisited = true and renders the change
  }
};
