import React, { useState } from "react";
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
    <>
      <FilterBar
          podcastsAmount={filteredPodcasts.length}
          onChange={filterPodcasts}
        />
      <div className="flex flex-wrap">
        {filteredPodcasts.map((podcast) => (
          <PodcastCard
            title={podcast.title}
            key={podcast.id}
            id={podcast.id}
            author={podcast.author}
            imgUrl={podcast.imgUrl}
          />
        ))}
      </div>
    </>
  );
};
