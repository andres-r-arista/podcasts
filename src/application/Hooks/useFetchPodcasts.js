import { useEffect, useState } from "react";
import { getRemoteData } from "../../services/getRemoteData";

export const useFetchPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoadingPodcasts, setIsLoading] = useState(true);

  const getData = async () => {
    const rawPodcasts = await getRemoteData("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
    const allPodcasts = rawPodcasts.feed?.entry?.map((podcast) => ({
      id: podcast.id?.attributes["im:id"],
      title: podcast["im:name"]?.label,
      author: podcast["im:artist"]?.label,
      imgUrl: podcast["im:image"][2]?.label,
      description: podcast.summary?.label,
    }));
    localStorage.setItem("podcasts", JSON.stringify(allPodcasts));
    localStorage.setItem("podcastsTime", +new Date());
    setPodcasts(allPodcasts);
    setIsLoading(false);
  };

  useEffect(() => {
    const savedDate = localStorage.getItem("podcastsTime");
    const yesterdayDate = +new Date(Date.now() - 24 * 3600 * 1000);
    // if savedDate is less than a day old...
    if (savedDate && yesterdayDate <= savedDate) {
      setPodcasts(JSON.parse(localStorage.getItem("podcasts")));
      setIsLoading(false);
    } else {
      getData();
    }
  }, []);

  return {
    podcasts,
    isLoadingPodcasts,
  };
};
