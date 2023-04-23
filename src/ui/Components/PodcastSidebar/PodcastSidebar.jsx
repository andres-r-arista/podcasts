import React from "react";
import { useNavigate } from "react-router-dom";

export const PodcastSidebar = ({ title, author, imgUrl, id, description, className }) => {
  const navigate = useNavigate();
  return (
    <div className={`border m-4 shadow-md mr-8 w-1/4 ${className}`}>
      <div className="border-b mx-2 px-8 py-4">
        <img
          src={imgUrl}
          alt={title}
          className="w-32 h-32 cursor-pointer"
          onClick={() => navigate(`/podcast/${id}`)}
        />
      </div>
      <div
        className="border-b mx-2 px-2 py-4 cursor-pointer"
        onClick={() => navigate(`/podcast/${id}`)}
      >
        <h1
          className="font-semibold truncate max-w-full text-sm px-2 pt-2"
          title={title}
        >
          {title}
        </h1>
        <h2
          className="truncate max-w-full text-xs px-2 pb-2"
          title={author}
        >{`by ${author}`}</h2>
      </div>
      <div className="border-b mx-2 px-2 py-4">
        <h1 className="font-semibold truncate max-w-full text-xs px-2 pt-2">
          Description:{" "}
        </h1>
        <h2 className="italic max-w-full text-xs px-2 pb-2" title={description}>
          {description}
        </h2>
      </div>
    </div>
  );
};
