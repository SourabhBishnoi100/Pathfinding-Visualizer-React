export const renderIsQueued = (cell, setGridState) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    const newRow = [...newGrid[cell.row]];
    newRow[cell.col] = { ...newRow[cell.col], isQueued: true };
    newGrid[cell.row] = newRow;

    return newGrid;
  });
};

// export const renderIsQueued = (cell, setGridState) => {
//   setGridState((prevGrid) => {
//     const newGrid = prevGrid.map((row, rowIndex) =>
//       row.map((c, colIndex) =>
//         rowIndex === cell.row && colIndex === cell.col
//           ? { ...c, isQueued: true }
//           : c
//       )
//     );
//     return newGrid;
//   });
// };

export const renderIsVisited = (cell, setGridState) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    const newRow = [...newGrid[cell.row]];
    newRow[cell.col] = { ...newRow[cell.col], isVisited: true };
    newGrid[cell.row] = newRow;

    return newGrid;
  });
};

// export const renderIsVisited = (cell, setGridState) => {
//   setGridState((prevGrid) => {
//     const newGrid = prevGrid.map((row, rowIndex) =>
//       row.map((c, colIndex) =>
//         rowIndex === cell.row && colIndex === cell.col
//           ? { ...c, isVisited: true }
//           : c
//       )
//     );
//     return newGrid;
//   });
// };

// export const animatePath = (endCell, grid, setGridState) => {
//   let previousCell = endCell;
//   const path = [];

//   while (true && endCell) {
//     const currentPathCell = previousCell.prevCell;
//     if (!currentPathCell.isStart) {
//       path.unshift[currentPathCell];
//       previousCell = currentPathCell;
//     } else {
//       break;
//     }
//   }

//   for (let cell of path) {
//     setGridState((grid) => {
//       const newGrid = grid.map((row, rowIndex) =>
//         row.map((c, colIndex) =>
//           rowIndex === cell.row && colIndex === cell.col
//             ? { ...c, isPath: true }
//             : c
//         )
//       );
//       return newGrid;
//     });
//   }
// };

export const animatePath = async (endCell, setGridState) => {
  let previousCell = endCell; // Use direct reference, not a clone
  const path = [];

  console.log(endCell.prevCell.row, endCell.prevCell.col);

  console.log("Path queue is being populated");

  // Build the path by backtracking using prevCell
  while (previousCell.prevCell) {
    path.unshift(previousCell.prevCell);
    previousCell = previousCell.prevCell;

    // Stop when the start cell is reached
    if (previousCell.isStart) break;
  }

  console.log("Path is being animated");

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
