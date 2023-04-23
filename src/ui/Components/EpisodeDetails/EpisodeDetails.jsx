import React from "react";

export const EpisodeDetails = ({ title, description, episodeUrl }) => {
  return (
    <div className="border m-4 shadow-md max-w-full px-4 py-4">
      <h1 className="font-bold text-lg py-2">{title}</h1>
      <h2 className="italic text-sm pb-4 border-b" dangerouslySetInnerHTML={{ __html: description }} />
      <audio controls className="w-full mt-4">
        <source src={episodeUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
