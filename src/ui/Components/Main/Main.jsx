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
      <header className="p-2 border-b mb-2">
        <a className="font-medium text-sky-800 hover:underline cursor-pointer">
          PodCaster
        </a>
      </header>
      <FilterBar
          podcastsAmount={filteredPodcasts.length}
          onChange={filterPodcasts}
        />
      <div className="flex flex-wrap">
        {filteredPodcasts.map((podcast) => (
          <PodcastCard
            title={podcast.title}
            key={podcast.id}
            author={podcast.author}
            imgUrl={podcast.imgUrl}
          />
        ))}
      </div>
    </>
  );
};
