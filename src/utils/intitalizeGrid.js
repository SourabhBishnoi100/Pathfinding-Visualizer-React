const initializeGrid = (rows, columns) => {
  const grid = [];

  for (let i = 0; i < rows; i++) {
    const current_row = [];
    for (let j = 0; j < columns; j++) {
      current_row.push({
        row: i,
        col: j,
        isStart: false,
        isEnd: false,
        isObstacle: false,
        isVisited: false,
        distance: Infinity,
        prevCell: null,
        isQueued: false,
        isPath: false,
      });
    }
    grid.push(current_row);
  }

  console.log("Grid initialized");

  return grid;
};

export default initializeGrid;
