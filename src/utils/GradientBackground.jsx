import React from "react";

const GradientBackground = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-400% animate-gradient min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default GradientBackground;
