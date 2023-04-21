import { useEffect, useState } from "react";
import { getPodcasts } from "../../services/getPodcasts";

export const useFetchPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const rawPodcasts = await getPodcasts();
    const allPodcasts = rawPodcasts.map((podcast) => ({
      id: podcast.id?.attributes["im:id"],
      title: podcast["im:name"]?.label,
      author: podcast["im:artist"]?.label,
      imgUrl: podcast["im:image"][2]?.label,
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
    isLoading,
  };
};
