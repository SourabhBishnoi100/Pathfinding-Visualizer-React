export const resetGrid = (setGridState, setPlacingStart, setExecuting) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    for (let row of newGrid) {
      for (let cell of row) {
        cell.isStart = false;
        cell.isEnd = false;
        cell.isObstacle = false;
        cell.isPath = false;
        cell.isVisited = false;
        cell.isQueued = false;
      }
    }
    return newGrid;
  });

  setPlacingStart(true);
  setExecuting(false);
};

export const clearObstacles = (
  setGridState,
  setPlacingObstacles,
  setExecuting
) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    for (let row of newGrid) {
      for (let cell of row) {
        cell.isObstacle = false;
        // cell.isPath = false;
        // cell.isVisited = false;
        // cell.isQueued = false;
      }
    }
    return newGrid;
  });

  setExecuting(false);
};

export const clearPath = (setGridState, setExecuting) => {
  setGridState((prevGrid) => {
    const newGrid = [...prevGrid];
    for (let row of newGrid) {
      for (let cell of row) {
        cell.isPath = false;
        cell.isVisited = false;
        cell.isQueued = false;
      }
    }
    return newGrid;
  });
  setExecuting(false);
};
