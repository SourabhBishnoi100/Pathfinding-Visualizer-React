export const primsMaze = (setGridState) => {
  setGridState((prevGrid) => {
    const ROWS = prevGrid.length;
    const COLS = prevGrid[0].length;

    // Create a deep copy of the grid
    const newGrid = prevGrid.map((row) => row.map((cell) => ({ ...cell })));

    // Initialize all cells as obstacles
    for (let row of newGrid) {
      for (let cell of row) {
        if (!cell.isStart && !cell.isEnd) {
          cell.isObstacle = true;
        }
      }
    }

    // List to track walls (walls are between cells, not inside)
    let walls = [];

    // Pick a random starting cell
    const startX = Math.floor(Math.random() * ROWS);
    const startY = Math.floor(Math.random() * COLS);
    // newGrid[startX][startY].isStart = true; // Mark start
    newGrid[startX][startY].isObstacle = false; // Make start path

    const addWalls = (row, col) => {
      // UP
      if (
        row - 2 >= 0 &&
        newGrid[row - 2] &&
        newGrid[row - 2][col] &&
        newGrid[row - 2][col].isObstacle
      ) {
        newGrid[row - 2][col].direction = "up";
        newGrid[row - 2][col].inBetween = newGrid[row - 1][col];

        walls.push(newGrid[row - 2][col]);
      }
      // DOWN
      if (
        row + 2 < ROWS &&
        newGrid[row + 2] &&
        newGrid[row + 2][col] &&
        newGrid[row + 2][col].isObstacle
      ) {
        newGrid[row + 2][col].direction = "down";
        newGrid[row + 2][col].inBetween = newGrid[row + 1][col];
        walls.push(newGrid[row + 2][col]);
      }
      // LEFT
      if (
        col - 2 >= 0 &&
        newGrid[row] &&
        newGrid[row][col - 2] &&
        newGrid[row][col - 2].isObstacle
      ) {
        newGrid[row][col - 2].direction = "left";
        newGrid[row][col - 2].inBetween = newGrid[row][col - 1];
        walls.push(newGrid[row][col - 2]);
      }
      // RIGHT
      if (
        col + 2 < COLS &&
        newGrid[row] &&
        newGrid[row][col + 2] &&
        newGrid[row][col + 2].isObstacle
      ) {
        newGrid[row][col + 2].direction = "right";
        newGrid[row][col + 2].inBetween = newGrid[row][col + 1];
        walls.push(newGrid[row][col + 2]);
      }
    };

    // const addWalls = (row, col) => {
    //   if (row - 2 >= 0) {
    //     if (newGrid[row - 2][col].isObstacle) {
    //       console.log(newGrid[row - 2][col].isObstacle);
    //       newGrid[row - 2][col].direction = "up";
    //       walls.push(newGrid[row - 2][col]);
    //     }
    //   }
    //   if (row + 2 < ROWS) {
    //     if (newGrid[row + 2][col].isObstacle) {
    // newGrid[row + 2][col].direction = "down";
    // walls.push(newGrid[row + 2][col]);
    //     }
    //   }
    //   if (col - 2 >= 0) {
    //     if (newGrid[row][col - 2].isObstacle) {
    // newGrid[row][col - 2].direction = "left";
    // walls.push(newGrid[row][col - 2]);
    //     }
    //   }
    //   if (col + 2 < COLS) {
    //     if (newGrid[row][col + 2].isObstacle) {
    // newGrid[row][col + 2].direction = "right";
    // walls.push(newGrid[row][col + 2]);
    //     }
    //   }
    // };

    // Initially add walls of the start cell to the list
    addWalls(startX, startY);

    // While there are walls to process
    while (walls.length) {
      // Randomly pick a wall
      const wall = walls.splice(Math.floor(Math.random() * walls.length), 1)[0];

      const { row, col, direction } = wall;

      // Check if the current wall is between a visited and unvisited cell
      if (newGrid[row][col].isObstacle) {
        newGrid[row][col].isObstacle = false; // Make it a path
        let betweenRow = newGrid[row][col].inBetween.row;
        let betweenCol = newGrid[row][col].inBetween.col;

        newGrid[betweenRow][betweenCol].isObstacle = false;

        // Add the newly exposed walls to the list
        // if (direction === "up") addWalls(row - 2, col);
        // if (direction === "down") addWalls(row + 2, col);
        // if (direction === "left") addWalls(row, col - 2);
        // if (direction === "right") addWalls(row, col + 2);
        addWalls(row, col);
      }
    }

    return newGrid;
  });
};

// export const primsMaze = (setGridState) => {
//   setGridState((prevGrid) => {
//     const ROWS = prevGrid.length;
//     const COLS = prevGrid[0].length;

//     const newGrid = [...prevGrid];
//     for (let row of newGrid) {
//       for (let cell of row) {
//         if (!cell.isStart && !cell.isEnd) {
//           cell.isObstacle = true;
//         }
//       }
//     }

//     const obstacles = [];

//     const startX = Math.floor(Math.random() * ROWS); // Random row index
//     const startY = Math.floor(Math.random() * COLS);

//     newGrid[startX][startY].isObstacle = false;

//     const addWalls = (cell) => {
//       if (cell.row - 2 >= 0 && newGrid[cell.row - 2][cell.col].isObstacle)
//         obstacles.push(newGrid[cell.row - 2][cell.col]);

//       if (cell.col - 2 >= 0 && newGrid[cell.row][cell.col - 2].isObstacle)
//         obstacles.push(newGrid[cell.row][cell.col - 2]);

//       if (cell.row + 2 < ROWS && newGrid[cell.row + 2][cell.col].isObstacle)
//         obstacles.push(newGrid[cell.row + 2][cell.col]);

//       if (cell.col + 2 < COLS && newGrid[cell.row][cell.col + 2].isObstacle)
//         obstacles.push(newGrid[cell.row][cell.col + 2]);
//     };

//     addWalls(newGrid[startX][startY]);

//     while (obstacles.length) {
//       const node = obstacles.splice(
//         Math.floor(Math.random() * obstacles.length),
//         1
//       )[0];

//       if (node.isObstacle) {
//         newGrid[node.row][node.col].isObstacle = false;

//         addWalls(node);
//       }
//     }
//     return newGrid;
//   });
// };

// const addWalls = (cell) => {
//   if (cell.row - 2 > 0 && cell.isObstacle)
//     obstacles.push(newGrid[cell.row - 2][cell.col]);
//   if (cell.col - 2 > 0 && cell.isObstacle)
//     obstacles.push(newGrid[cell.row][cell.col - 2]);
//   if (cell.row + 2 < ROWS && cell.isObstacle)
//     obstacles.push(newGrid[cell.row + 2][cell.col]);
//   if (cell.col + 2 < COLS && cell.isObstacle)
//     obstacles.push(newGrid[cell.row][cell.col + 2]);
// };
