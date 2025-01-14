export const recursiveBacktrackingMaze = (
  grid,
  setGridState,
  setGeneratingMaze
) => {
  setGridState((prevGrid) => {
    const ROWS = prevGrid.length;
    const COLS = prevGrid[0].length;

    // Deep copy of the grid to avoid mutating state directly
    const newGrid = prevGrid.map((row) => row.map((cell) => ({ ...cell })));

    // Step 1: Initialize all cells as obstacles except start and end
    for (let row of newGrid) {
      for (let cell of row) {
        if (!cell.isStart && !cell.isEnd) {
          cell.isObstacle = true;
        }
      }
    }

    // Step 2: Random starting point (even index for consistency)
    const startX = Math.floor(Math.random() * (ROWS / 2)) * 2;
    const startY = Math.floor(Math.random() * (COLS / 2)) * 2;

    // Mark the starting cell as a path
    newGrid[startX][startY].isObstacle = false;

    // Step 3: Helper function to shuffle directions randomly
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // Step 4: Recursive DFS function to carve the maze
    const carvePath = (x, y) => {
      const directions = shuffle([
        { dx: -2, dy: 0 }, // Up
        { dx: 2, dy: 0 }, // Down
        { dx: 0, dy: -2 }, // Left
        { dx: 0, dy: 2 }, // Right
      ]);

      for (const { dx, dy } of directions) {
        const nextX = x + dx;
        const nextY = y + dy;

        // Check if the next cell is within the grid and still an obstacle
        if (
          nextX >= 0 &&
          nextX < ROWS &&
          nextY >= 0 &&
          nextY < COLS &&
          newGrid[nextX][nextY].isObstacle
        ) {
          // Remove the wall between current and next cell
          newGrid[x + dx / 2][y + dy / 2].isObstacle = false;
          newGrid[nextX][nextY].isObstacle = false;

          // Recursively continue carving from the next cell
          carvePath(nextX, nextY);
        }
      }
    };

    // Step 5: Start the recursive backtracking from the starting point
    carvePath(startX, startY);

    return newGrid;
  });
};
