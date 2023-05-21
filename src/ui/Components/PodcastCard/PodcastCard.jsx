import React from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const PodcastCard = ({ title, author, imgUrl, id }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/2 md:w-1/4" data-testid="podcast-card">
      <div className="border text-center h-24 mx-4 my-16 shadow-md cursor-pointer" data-testid="podcast-card-box" onClick={() => navigate(`/podcast/${id}`)}>
        <div className="flex flex-col -translate-y-8 items-center">
          <img src={imgUrl} alt={title} data-testid="podcast-card-image" className="w-16 h-16 rounded-full" />
          <h1
            className="uppercase font-semibold truncate max-w-full text-sm px-2"
            data-testid="podcast-card-title"
            title={title}
          >
            {title}
          </h1>
          <h2
            className="text-gray-400 font-semibold truncate max-w-full text-xs px-2"
            data-testid="podcast-card-author"
            title={author}
          >{`Author: ${author}`}</h2>
        </div>
      </div>
    </div>
  );
};

PodcastCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
