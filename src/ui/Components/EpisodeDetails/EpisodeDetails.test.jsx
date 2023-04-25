import { render, screen } from "@testing-library/react";

import { EpisodeDetails } from "./EpisodeDetails";

const title = "Title";
const episodeUrl = "http://www.google.com";
const description = "Description";

describe("Tests in <EpisodeDetails />", () => {
  test("must match the snapshot", () => {
    const { container } = render(
      <EpisodeDetails
        title={title}
        description={description}
        episodeUrl={episodeUrl}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("must display the correct title", () => {
    render(
      <EpisodeDetails
        title={title}
        description={description}
        episodeUrl={episodeUrl}
      />
    );
    const screenTitle = screen.getByTestId("episode-details-title");
    expect(screenTitle).toHaveTextContent("Title");
  });

  test("must display the correct description", () => {
    render(
      <EpisodeDetails
        title={title}
        description={description}
        episodeUrl={episodeUrl}
      />
    );
    const screenTitle = screen.getByTestId("episode-details-description");
    expect(screenTitle).toHaveTextContent("Description");
  });

  test("must use the correct audio url", () => {
    render(
      <EpisodeDetails
        title={title}
        description={description}
        episodeUrl={episodeUrl}
      />
    );
    const screenAudio = screen.getByTestId("episode-details-audio");
    expect(screenAudio.src).toContain("http://www.google.com");
  });
});
