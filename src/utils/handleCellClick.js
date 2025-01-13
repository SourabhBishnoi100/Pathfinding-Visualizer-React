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
  setStartCell,
  setEndCell
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
      setEndCell(newGrid[row][col]);
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
      newRow[col] = {
        ...newRow[col],
        isObstacle: !prevGrid[row][col].isObstacle,
      };
      newGrid[row] = newRow;
      return newGrid;
    });
  }
};
