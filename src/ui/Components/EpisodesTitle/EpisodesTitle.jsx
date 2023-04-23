import React from "react";

export const EpisodesTitle = ({ amount }) => {
  return (
    <div className="border m-4 shadow-md font-bold truncate max-w-full text-lg h-12 px-2 pt-2">{`Episodes: ${amount}`}</div>
  );
};
