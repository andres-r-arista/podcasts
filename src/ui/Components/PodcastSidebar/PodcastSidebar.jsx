import React from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const PodcastSidebar = ({ title, author, imgUrl, id, description, className }) => {
  const navigate = useNavigate();
  return (
    <div className={`border md:m-4 md:shadow-md md:mr-8 w-1/4 ${className}`} data-testid="podcast-sidebar">
      <div className="border-b mx-2 px-8 py-4">
        <img
          src={imgUrl}
          alt={title}
          className="w-32 h-32 cursor-pointer"
          data-testid="podcast-sidebar-image"
          onClick={() => navigate(`/podcast/${id}`)}
        />
      </div>
      <div
        className="border-b mx-2 px-2 py-4 cursor-pointer"
        data-testid="podcast-sidebar-box"
        onClick={() => navigate(`/podcast/${id}`)}
      >
        <h1
          className="font-semibold truncate max-w-full text-sm px-2 pt-2"
          data-testid="podcast-sidebar-title"
          title={title}
        >
          {title}
        </h1>
        <h2
          className="truncate max-w-full text-xs px-2 pb-2"
          data-testid="podcast-sidebar-author"
          title={author}
        >{`by ${author}`}</h2>
      </div>
      <div className="md:border-b mx-2 px-2 py-4">
        <h1 className="font-semibold truncate max-w-full text-xs px-2 pt-2">
          Description:{" "}
        </h1>
        <h2 className="italic max-w-full text-xs px-2 pb-2" data-testid="podcast-sidebar-description" title={description}>
          {description}
        </h2>
      </div>
    </div>
  );
};

PodcastSidebar.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};