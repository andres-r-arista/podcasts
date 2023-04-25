import { useEffect, useState } from "react";
import { getRemoteData } from "../../services/getRemoteData";

export const useFetchPodcastDetails = (podcastId) => {
  const [podcastDetails, setPodcastDetails] = useState([]);
  const [isLoadingPodcastDetails, setIsLoading] = useState(true);

  const getData = async (podcastId) => {
    const rawPodcast = await getRemoteData(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    );
    const formattedPodcast = {
      id: rawPodcast.results[0]?.trackId,
      title: rawPodcast.results[0]?.trackName,
      author: rawPodcast.results[0]?.artistName,
      imgUrl: rawPodcast.results[0]?.artworkUrl600,
      episodes: rawPodcast.results
        ?.slice(1)
        .map((episode) => ({
          trackId: episode.trackId,
          trackName: episode.trackName,
          description: episode.description,
          episodeUrl: episode.episodeUrl,
          trackTimeMillis: episode.trackTimeMillis,
          releaseDate: episode.releaseDate,
        })),
    };
    localStorage.setItem(
      `podcast${podcastId}`,
      JSON.stringify({ formattedPodcast, savedDate: +new Date(Date.now()) })
    );
    setPodcastDetails(formattedPodcast);
    setIsLoading(false);
  };

  useEffect(() => {
    const podcastWithDate = JSON.parse(
      localStorage.getItem(`podcast${podcastId}`)
    );
    const podcast = podcastWithDate?.formattedPodcast;
    const savedDate = podcastWithDate?.savedDate;
    const yesterdayDate = +new Date(Date.now() - 24 * 3600 * 1000);
    // if savedDate is less than a day old...
    if (savedDate && yesterdayDate <= savedDate) {
      setPodcastDetails(podcast);
      setIsLoading(false);
    } else {
      getData(podcastId);
    }
  }, [podcastId]);

  return {
    podcastDetails,
    isLoadingPodcastDetails,
  };
};
