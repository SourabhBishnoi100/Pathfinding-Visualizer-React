import React from "react";

const Cell = ({ cell }) => {
  return (
    <div
      className="text-sm border border-gray-400 grow flex items-center
      justify-center hover:scale-125 hover:cursor-pointer hover:shadow-inner"
      style={{
        backgroundColor: `${cell.isObstacle ? "black" : "white"}`,
      }}
    ></div>
  );
};

export default Cell;
