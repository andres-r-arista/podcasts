import React from "react";

export const Spinner = () => {
  return (
    <div className="absolute top-2 right-2">
      <img className="h-6 w-6" src="/spinner.gif" alt="Loading..." />
    </div>
  );
};
