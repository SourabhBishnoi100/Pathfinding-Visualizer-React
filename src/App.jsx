import React from "react";
import { useState } from "react";

const App = () => {
  const rows = 25;
  const columns = 50;

  const [grid, setGridState] = useState(() => {
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
        });
      }
      grid.push(current_row);
    }

    console.log("Grid initialized");

    return grid;
  });

  return (
    <div className="flex flex-col items-center w-full h-screen">
      {/* Control Bar */}
      <div className="w-full p-4 mb-4 bg-gray-200 text-center">
        <p>Control Bar</p>
      </div>

      {/* Grid Container */}
      <div className="flex flex-col grow mx-8 my-4 bg-gray-100 w-4/5">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex grow">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="border border-gray-400 grow flex items-center justify-center hover:scale-125 hover:cursor-pointer hover:shadow-inner"
                style={{
                  backgroundColor: `${cell.isObstacle ? "black" : "white"}`,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="flex flex-col items-center w-full h-screen">
  //     {/* Control Bar */}
  //     <div className="w-full p-4 mb-4 bg-gray-200 text-center">
  //       <p>Control Bar</p>
  //     </div>

  //     {/* Grid Container */}
  //     <div className="flex flex-col w-full h-full mx-10 mb-4 mt-0">
  //       {grid.map((row, rowIndex) => (
  //         <div
  //           key={rowIndex}
  //           className="flex w-full grow"
  //           style={{ height: `${100 / grid.length}%` }}
  //         >
  //           {row.map((cell, colIndex) => (
  //             <div
  //               key={`${rowIndex}-${colIndex}`}
  //               className="border border-gray-400 grow flex items-center justify-center"
  //             >
  //               {cell.row},{cell.col}
  //             </div>
  //           ))}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="flex flex-col items-center w-full h-screen">
  //     {grid.map((row, rowIndex) => (
  //       <div
  //         key={rowIndex}
  //         className="flex w-full grow"
  //         style={{ height: `${100 / grid.length}%` }}
  //       >
  //         {row.map((cell, colIndex) => (
  //           <div
  //             key={`${rowIndex}-${colIndex}`}
  //             className="border border-gray-400 grow flex items-center justify-center"
  //           >
  //             {/* Debug content */}
  //             {cell.row},{cell.col}
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );

  // return (
  //   <div className="flex flex-col items-center">
  //     {gridState.map((row, rowIndex) => (
  //       <div key={rowIndex} className="flex">
  //         {row.map((cell, colIndex) => (
  //           <div
  //             key={`${rowIndex}-${colIndex}`}
  //             className="border border-gray-400 w-[calc(100vw/10)] flex items-center justify-center"
  //           >
  //             {/* Content for debugging */}
  //             {cell.row},{cell.column}
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );

  // return (
  //   <div className="flex flex-col justify-center items-center w-full h-full">
  //     {gridState.map((row, rowIndex) => (
  //       <div
  //         key={rowIndex}
  //         className="flex justify-center items-center w-full h-full"
  //       >
  //         {row.map((node) => (
  //           <div
  //             key={`${node.row}-${node.column}`}
  //             className={`h-full w-full border border-solid border-black bg-${
  //               node.isObstacle ? "black" : "white"
  //             }`}
  //           ></div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default App;
