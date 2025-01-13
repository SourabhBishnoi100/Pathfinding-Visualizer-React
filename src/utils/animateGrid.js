export const renderIsQueued = (cell, setGridState) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    const newRow = [...newGrid[cell.row]];
    newRow[cell.col] = { ...newRow[cell.col], isQueued: true };
    newGrid[cell.row] = newRow;

    return newGrid;
  });
};

export const renderIsVisited = (cell, setGridState) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    const newRow = [...newGrid[cell.row]];
    newRow[cell.col] = { ...newRow[cell.col], isVisited: true };
    newGrid[cell.row] = newRow;

    return newGrid;
  });
};

export const animatePath = async (endCell, setGridState) => {
  let previousCell = endCell; // Use direct reference, not a clone
  const path = [];

  // Build the path by backtracking using prevCell
  while (previousCell.prevCell) {
    path.unshift(previousCell.prevCell);
    previousCell = previousCell.prevCell;

    // Stop when the start cell is reached
    if (previousCell.isStart) break;
  }

  // Animate the path
  for (let cell of path) {
    setGridState((prevGrid) => {
      const newGrid = prevGrid.map((row, rowIndex) =>
        row.map((c, colIndex) =>
          rowIndex === cell.row && colIndex === cell.col
            ? { ...c, isPath: true } // Corrected from isQueued to isPath
            : c
        )
      );
      return newGrid;
    });

    // Add delay for animation effect
    await new Promise((resolve) => setTimeout(resolve, 1));
  }
};

export const renderIsNotVisited = (cell, setGridState) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    const newRow = [...newGrid[cell.row]];
    newRow[cell.col] = { ...newRow[cell.col], isVisited: false };
    newGrid[cell.row] = newRow;

    return newGrid;
  });
};
