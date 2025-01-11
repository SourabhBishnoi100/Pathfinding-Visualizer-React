export const getNeighbours = (total_rows, total_cols, currentCell, grid) => {
  const neighbours = [];

  if (currentCell.col > 0) {
    neighbours.push(grid[currentCell.row][currentCell.col - 1]);
  }
  if (currentCell.col < total_cols - 1) {
    neighbours.push(grid[currentCell.row][currentCell.col + 1]);
  }
  if (currentCell.row > 0) {
    neighbours.push(grid[currentCell.row - 1][currentCell.col]);
  }
  if (currentCell.row < total_rows - 1) {
    neighbours.push(grid[currentCell.row + 1][currentCell.col]);
  }

  return neighbours;
};
