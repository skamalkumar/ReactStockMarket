import React from "react";

const Card = ({ children }) => {
  return (
    <div className="h-full w-full rounded-md relative p-8 border-2 bg-gray">
      {children}
    </div>
  );
};

export default Card;
