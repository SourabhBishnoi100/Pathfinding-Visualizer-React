export const randomMaze = (setGridState) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    for (let row of newGrid) {
      for (let cell of row) {
        if (Math.random() * 10 < 1.5 && !cell.isStart && !cell.isEnd) {
          cell.isObstacle = true;
        }
      }
    }
    return newGrid;
  });
};
