import {
  renderIsQueued,
  renderIsVisited,
  animatePath,
  renderIsNotVisited,
} from "../../utils/animateGrid.js";
import { getNeighbours } from "../../utils/getNeighbours.js";
import { PriorityQueue } from "./priorityQueue.js";

const hscore = (cell1, cell2) => {
  return Math.abs(cell1.row - cell2.row) + Math.abs(cell1.col - cell2.col);
};

export const astar = async (startCell, endCell, grid, setGridState, speed) => {
  const openSet = new PriorityQueue();
  const total_rows = grid.length;
  const total_cols = grid[0].length;

  console.log("Astar is running");

  startCell.g = 0;
  startCell.h = hscore(startCell, endCell);
  console.log(startCell.h);
  startCell.f = startCell.h;
  console.log(startCell.f);

  openSet.enqueue(startCell);

  console.log(openSet.isEmpty());

  while (!openSet.isEmpty()) {
    const currentCell = openSet.dequeue();
    renderIsVisited(currentCell, setGridState);
    currentCell.isVisited = true;

    if (currentCell.isEnd) {
      animatePath(currentCell, setGridState);
      return;
    }

    const neighbours = getNeighbours(total_rows, total_cols, currentCell, grid);

    for (let neighbour of neighbours) {
      if (!neighbour.isObstacle) {
        const tenativeG = currentCell.g + 1;
        if (tenativeG < neighbour.g || !neighbour.isQueued) {
          neighbour.g = tenativeG;
          neighbour.h = hscore(neighbour, endCell);
          neighbour.f = neighbour.g + neighbour.h;
          neighbour.prevCell = currentCell;

          if (neighbour.isVisited) {
            renderIsNotVisited(neighbour, setGridState);
            neighbour.isVisited = false;
            renderIsQueued(neighbour, setGridState);
            neighbour.isQueued = true;
            openSet.enqueue(neighbour);
          } else if (!neighbour.isQueued) {
            neighbour.isQueued = true;
            renderIsQueued(neighbour, setGridState);
            openSet.enqueue(neighbour);
          }
        }
      }
    }
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
};

// src/algorithms/astar.js
// import { renderIsQueued, renderIsVisited, animatePath } from "../utils/animateGrid";
// import { getNeighbours } from "../utils/getNeighbours";

// const heuristic = (cell, endCell) => {
//   return Math.abs(cell.row - endCell.row) + Math.abs(cell.col - endCell.col);
// };

// export const astar = async (startCell, endCell, grid, setGridState, speed = 50) => {
//   const openSet = [];
//   startCell.g = 0;
//   startCell.h = heuristic(startCell, endCell);
//   startCell.f = startCell.h;
//   openSet.push(startCell);

//   while (openSet.length > 0) {
//     openSet.sort((a, b) => a.f - b.f);
//     const currentCell = openSet.shift();

//     if (currentCell.isObstacle) continue;

//     renderIsVisited(currentCell, grid, setGridState);
//     currentCell.isVisited = true;

//     if (currentCell.isEnd) {
//       await animatePath(currentCell, grid, setGridState, speed);
//       return;
//     }

//     const neighbours = getNeighbours(grid.length, grid[0].length, currentCell, grid);
//     for (let neighbour of neighbours) {
//       if (neighbour.isVisited || neighbour.isObstacle) continue;

//       const tentativeG = currentCell.g + 1;
//       if (tentativeG < neighbour.g || !openSet.includes(neighbour)) {
//         neighbour.g = tentativeG;
//         neighbour.h = heuristic(neighbour, endCell);
//         neighbour.f = neighbour.g + neighbour.h;
//         neighbour.prevCell = currentCell;

//         if (!openSet.includes(neighbour)) {
//           renderIsQueued(neighbour, grid, setGridState);
//           openSet.push(neighbour);
//         }
//       }
//     }

//     await new Promise((resolve) => setTimeout(resolve, speed));
//   }
// };
