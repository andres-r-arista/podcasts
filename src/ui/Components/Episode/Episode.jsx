import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { PodcastSidebar } from "../PodcastSidebar";
import { useFetchPodcastDetails } from "../../../application/Hooks/useFetchPodcastDetails";
import { useFetchPodcasts } from "../../../application/Hooks/useFetchPodcasts";
import { EpisodeDetails } from "../EpisodeDetails";
import { Spinner } from "../Spinner";

export const Episode = () => {
  const { podcastId, episodeId } = useParams();
  const { podcasts, isLoadingPodcasts } = useFetchPodcasts();
  const { podcastDetails, isLoadingPodcastDetails } =
    useFetchPodcastDetails(podcastId);
  const [podcast, setPodcast] = useState([]);
  useEffect(() => {
    setPodcast(podcasts.find((podcast) => podcast.id === podcastId));
  }, [podcasts, podcastId]);
  const [episode, setEpisode] = useState({});
  useEffect(() => {
    setEpisode(
      podcastDetails?.episodes?.find(
        (episode) => episode.trackId === Number(episodeId)
      )
    );
  }, [podcastDetails, episodeId]);
  return (
    <div className="flex flex-col md:flex-row">
      {isLoadingPodcasts || isLoadingPodcastDetails ? (
        <Spinner />
      ) : (
        <>
          <PodcastSidebar
            title={podcast?.title}
            id={podcast?.id}
            author={podcast?.author}
            imgUrl={podcast?.imgUrl}
            description={podcast?.description}
            className="w-full md:w-1/4 h-full"
          />
          <div className="w-full md:w-3/4 md:pl-4">
            <EpisodeDetails
              title={episode?.trackName}
              description={episode?.description}
              episodeUrl={episode?.episodeUrl}
            />
          </div>
        </>
      )}
    </div>
  );
};
