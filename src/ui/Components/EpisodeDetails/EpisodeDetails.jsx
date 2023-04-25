import React from "react";

import PropTypes from "prop-types";

export const EpisodeDetails = ({ title, description, episodeUrl }) => {
  return (
    <div className="border m-4 shadow-md max-w-full px-4 py-4">
      <h1 className="font-bold text-lg py-2" data-testid="episode-details-title">{title}</h1>
      <h2
        className="italic text-sm pb-4 border-b"
        data-testid="episode-details-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <audio controls className="w-full mt-4" >
        <source src={episodeUrl} type="audio/mpeg" data-testid="episode-details-audio"/>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

EpisodeDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  episodeUrl: PropTypes.string.isRequired,
};
