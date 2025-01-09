import React, { createContext, useContext, useEffect, useState } from "react";

const DragContext = createContext();

export const DragContextProvider = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseUP = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", handleMouseUP);

    return () => {
      window.removeEventListener("mouseup", handleMouseUP);
    };
  }, [isDragging]);

  return (
    <DragContext.Provider value={{ isDragging, setIsDragging }}>
      {children}
    </DragContext.Provider>
  );
};

export const useDragState = () => useContext(DragContext);
