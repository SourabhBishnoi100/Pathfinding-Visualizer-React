export const handleCellClick = (
  row,
  col,
  prevGrid,
  setGridState,
  placingStart,
  setPlacingStart,
  placingEnd,
  setPlacingEnd,
  placingObstacle,
  setPlacingObstacle
) => {
  console.log("handleCellClick triggered", row, col);

  if (placingStart) {
    console.log("if statement triggered", row, col);

    setGridState(() => {
      const newGrid = [...prevGrid];
      const newRow = [...newGrid[row]];
      newRow[col] = { ...newRow[col], isStart: true };
      newGrid[row] = newRow;
      return newGrid;
    });

    console.log("grid modified", row, col, prevGrid[row][col]);

    setPlacingStart(!placingStart);
    setPlacingEnd(!placingEnd);
  } else if (placingEnd && !prevGrid[row][col].isStart) {
    setGridState(() => {
      const newGrid = [...prevGrid];
      const newRow = [...newGrid[row]];
      newRow[col] = { ...newRow[col], isEnd: true };
      newGrid[row] = newRow;
      return newGrid;
    });
    setPlacingEnd(!placingEnd);
  }
};
