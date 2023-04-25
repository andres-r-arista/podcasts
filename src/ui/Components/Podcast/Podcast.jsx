import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetchPodcastDetails } from "../../../application/Hooks/useFetchPodcastDetails";
import { useFetchPodcasts } from "../../../application/Hooks/useFetchPodcasts";
import { PodcastSidebar } from "../PodcastSidebar";
import { EpisodesTitle } from "../EpisodesTitle";
import { EpisodesList } from "../EpisodesList/EpisodesList";
import { Spinner } from "../Spinner";

export const Podcast = () => {
  const { podcastId } = useParams();
  const { podcasts, isLoadingPodcasts } = useFetchPodcasts();
  const { podcastDetails, isLoadingPodcastDetails } =
    useFetchPodcastDetails(podcastId);
  const [podcast, setPodcast] = useState({});
  const [isLoadingPodcast, setIsLoadingPodcast] = useState(true);
  useEffect(() => {
    if (!podcasts.length) {
      return;
    }
    setPodcast(podcasts.find((podcast) => podcast.id === podcastId));
    setIsLoadingPodcast(false);
  }, [podcasts, podcastId]);

  return (
    <>
      {isLoadingPodcasts || isLoadingPodcastDetails || isLoadingPodcast ? (
        <Spinner />
      ) : (
        <div className="flex">
          <PodcastSidebar
            title={podcast?.title}
            id={podcastId}
            author={podcast?.author}
            imgUrl={podcast?.imgUrl}
            description={podcast?.description}
            className="w-1/4 h-full"
          />
          <div className="w-3/4 pl-4">
            <EpisodesTitle amount={podcastDetails?.episodes?.length} />
            <EpisodesList
              episodes={podcastDetails?.episodes}
              podcastId={podcastId}
            />
          </div>
        </div>
      )}
    </>
  );
};
