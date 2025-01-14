export const primsMaze = (grid, setGridState, setGeneratingMaze) => {
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
    const startX = ROWS - 1;
    const startY = COLS - 1;
    // newGrid[startX][startY].isStart = true; // Mark start
    newGrid[startX][startY].isObstacle = false; // Make start path

    const addWalls = (row, col) => {
      // UP
      if (
        row - 2 >= 0 &&
        (newGrid[row - 2][col].isObstacle ||
          newGrid[row - 2][col].isStart ||
          newGrid[row - 2][col].isEnd)
      ) {
        // newGrid[row - 2][col].direction = "up";
        newGrid[row - 2][col].inBetween = newGrid[row - 1][col];

        walls.push(newGrid[row - 2][col]);
      }
      // DOWN
      if (
        row + 2 < ROWS &&
        (newGrid[row + 2][col].isObstacle ||
          newGrid[row + 2][col].isStart ||
          newGrid[row + 2][col].isEnd)
      ) {
        newGrid[row + 2][col].inBetween = newGrid[row + 1][col];
        walls.push(newGrid[row + 2][col]);
      }
      // LEFT
      if (
        col - 2 >= 0 &&
        (newGrid[row][col - 2].isObstacle ||
          newGrid[row][col - 2].isStart ||
          newGrid[row][col - 2].isEnd)
      ) {
        newGrid[row][col - 2].inBetween = newGrid[row][col - 1];
        walls.push(newGrid[row][col - 2]);
      }
      // RIGHT
      if (
        col + 2 < COLS &&
        (newGrid[row][col + 2].isObstacle ||
          newGrid[row][col + 2].isStart ||
          newGrid[row][col + 2].isEnd)
      ) {
        newGrid[row][col + 2].inBetween = newGrid[row][col + 1];
        walls.push(newGrid[row][col + 2]);
      }
    };

    addWalls(startX, startY);

    // While there are walls to process
    while (walls.length) {
      // Randomly pick a wall
      const wall = walls.splice(Math.floor(Math.random() * walls.length), 1)[0];

      const { row, col } = wall;

      // Check if the current wall is between a visited and unvisited cell
      if (newGrid[row][col].isObstacle) {
        newGrid[row][col].isObstacle = false; // Make it a path
        let betweenRow = newGrid[row][col].inBetween.row;
        let betweenCol = newGrid[row][col].inBetween.col;

        newGrid[betweenRow][betweenCol].isObstacle = false;
        addWalls(row, col);
      }
    }

    return newGrid;
  });
};
