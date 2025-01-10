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
  if (placingStart) {
    setGridState(() => {
      const newGrid = [...prevGrid];
      const newRow = [...newGrid[row]];
      newRow[col] = { ...newRow[col], isStart: true };
      newGrid[row] = newRow;
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
      // prevGrid[row][col].isObsatcle = true;
      // console.log(prevGrid[row][col].isObsatcle);
      // return prevGrid;

      const newGrid = [...prevGrid];
      const newRow = [...newGrid[row]];
      newRow[col] = { ...newRow[col], isObstacle: true };
      newGrid[row] = newRow;
      return newGrid;
    });
  }
};
