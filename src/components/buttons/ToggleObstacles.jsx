import React from "react";
import { useGridContext } from "../../context/GridContext";

const ToggleObstacles = () => {
  const { erasingObstacle, setErasingObstacle } = useGridContext();
  return (
    <div className="flex flex-col justify-center">
      <div className="px-4 py-2 bg-red-500 rounded-t-md">
        Mode : {erasingObstacle ? "Erasing Obstacles" : "Placing Obstacles"}
      </div>
      <button
        className="border px-4 py-1 border-black rounded-b-md text-center  bg-red-500 hover:bg-red-700 active:scale-95  "
        onClick={() => {
          setErasingObstacle((prevValue) => {
            return !prevValue;
          });
        }}
      >
        Click to Toggle
      </button>
    </div>
  );
};

export default ToggleObstacles;
