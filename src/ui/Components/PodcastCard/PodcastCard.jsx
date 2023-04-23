import React from "react";
import { useNavigate } from "react-router-dom";

export const PodcastCard = ({ title, author, imgUrl, id }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/4">
      <div className="border text-center h-24 mx-4 my-16 shadow-md cursor-pointer" onClick={() => navigate(`/podcast/${id}`)}>
        <div className="flex flex-col -translate-y-8 items-center">
          <img src={imgUrl} alt={title} className="w-16 h-16 rounded-full" />
          <h1
            className="uppercase font-semibold truncate max-w-full text-sm px-2"
            title={title}
          >
            {title}
          </h1>
          <h2
            className="text-gray-400 font-semibold truncate max-w-full text-xs px-2"
            title={author}
          >{`Author: ${author}`}</h2>
        </div>
      </div>
    </div>
  );
};
