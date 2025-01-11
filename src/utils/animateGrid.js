export const renderIsQueued = (cell, grid, setGridState) => {
  setGridState(() => {
    const newGrid = [...grid];
    const newRow = [...newGrid[cell.row]];
    newRow[cell.col] = { ...newRow[cell.col], isQueued: true };
    newGrid[cell.row] = newRow;

    return newGrid;
  });
  console.log("Grid Queued", grid[cell.row][cell.col].isQueued);
};

export const renderIsVisited = (cell, grid, setGridState) => {
  setGridState(() => {
    const newGrid = [...grid];
    const newRow = [...newGrid[cell.row]];
    newRow[cell.col] = { ...newRow[cell.col], isVisited: true };
    newGrid[cell.row] = newRow;

    return newGrid;
  });
  console.log("Grid Visited", grid[cell.row][cell.col].isVisited);
};

export const animatePath = (endCell, grid, setGridState) => {
  let previousCell = endCell;
  const path = [];

  while (true) {
    const currentPathCell = previousCell.prevCell;
    if (!currentPathCell.isStart) {
      path.unshift[currentPathCell];
      previousCell = currentPathCell;
    } else {
      break;
    }
  }

  for (let cell of path) {
    setGridState(() => {
      const newGrid = [...grid];
      const newRow = [...newGrid[cell.row]];
      newRow[cell.col] = { ...newRow[cell.col], isPath: true };
      newGrid[cell.row] = newRow;

      return newGrid;
    });
  }
};
