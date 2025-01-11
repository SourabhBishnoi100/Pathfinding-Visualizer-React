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
  setPlacingObstacle,
  setStartCell
) => {
  if (placingStart) {
    setGridState(() => {
      const newGrid = [...prevGrid];
      const newRow = [...newGrid[row]];
      newRow[col] = { ...newRow[col], isStart: true };
      newGrid[row] = newRow;
      setStartCell(newGrid[row][col]);
      return newGrid;
    });

    setPlacingStart(false);
    setPlacingEnd(true);
  } else if (placingEnd && !prevGrid[row][col].isStart) {
    setGridState(() => {
      const newGrid = [...prevGrid];
      const newRow = [...newGrid[row]];
      newRow[col] = { ...newRow[col], isEnd: true };
      newGrid[row] = newRow;
      return newGrid;
    });
    setPlacingEnd(false);
    setPlacingObstacle(true);
  } else if (
    placingObstacle &&
    !prevGrid[row][col].isStart &&
    !prevGrid[row][col].isEnd
  ) {
    setGridState(() => {
      const newGrid = [...prevGrid];
      const newRow = [...newGrid[row]];
      newRow[col] = { ...newRow[col], isObstacle: true };
      newGrid[row] = newRow;
      return newGrid;
    });
  }
};
