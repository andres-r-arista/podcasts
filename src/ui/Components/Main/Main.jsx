import React, { useState } from "react";

import PropTypes from "prop-types";

import { PodcastCard } from "../PodcastCard";
import { FilterBar } from "../FilterBar";

export const Main = ({ podcasts }) => {
  const [filteredPodcasts, setFilteredPodcasts] = useState(podcasts);
  const filterPodcasts = (event) => {
    setFilteredPodcasts(
      podcasts.filter(
        (podcast) =>
          podcast.title
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          podcast.author
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <div data-testid="main">
      <FilterBar
          podcastsAmount={filteredPodcasts.length || 0}
          onChange={filterPodcasts}
        />
      <div className="flex flex-wrap">
        {filteredPodcasts && filteredPodcasts.map((podcast) => (
          <PodcastCard
            title={podcast.title}
            key={podcast.id}
            id={podcast.id}
            author={podcast.author}
            imgUrl={podcast.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

Main.propTypes = {
  podcasts: PropTypes.array.isRequired,
};