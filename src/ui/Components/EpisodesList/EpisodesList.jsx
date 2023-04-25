import React from "react";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import convertMsToTime from "../../../application/Helpers/convertMsToTime";

export const EpisodesList = ({ episodes, podcastId }) => {
  const navigate = useNavigate();
  return (
    <div className="border m-4 shadow-md max-w-full px-4 py-8">
      <table className="table-auto w-full text-left text-sm">
        <thead>
          <tr className="border-b">
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr key={episode.trackId} data-testid="episodes-list-table-row" className="even:bg-gray-50 border-b last:border-none leading-8">
              <td
                className="text-sky-800 hover:underline cursor-pointer"
                data-testid="episodes-list-title"
                onClick={() => navigate(`/podcast/${podcastId}/episode/${episode.trackId}`)}
              >
                {episode.trackName}
              </td>
              <td data-testid="episodes-list-date">
                {new Date(episode.releaseDate).toLocaleDateString("en-US")}
              </td>
              <td data-testid="episodes-list-duration">{convertMsToTime(episode.trackTimeMillis)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

EpisodesList.propTypes = {
  episodes: PropTypes.array.isRequired,
  podcastId: PropTypes.string.isRequired,
};