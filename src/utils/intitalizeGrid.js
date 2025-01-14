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
        prevCell: null,
        isQueued: false,
        isPath: false,
        g: Infinity,
        h: 0,
        f: Infinity,
        inBetween: null,
      });
    }
    grid.push(current_row);
  }

  console.log("Grid initialized");

  return grid;
};

export default initializeGrid;
