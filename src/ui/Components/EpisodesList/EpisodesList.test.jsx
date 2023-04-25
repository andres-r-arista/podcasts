import { render, screen, fireEvent } from "@testing-library/react";

import { formattedMockEpisodes } from "../../../application/Mocks/formattedMockEpisodes";
import { EpisodesList } from "./EpisodesList";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const episodes = formattedMockEpisodes;
const podcastId='1535809341';

describe("Tests in <EpisodesList />", () => {
  test("must match the snapshot", () => {
    const { container } = render(<EpisodesList episodes={episodes} podcastId={podcastId} />);
    expect(container).toMatchSnapshot();
  });

  test("must have two lines in the table if receiving rwo episodes", () => {
    render(<EpisodesList episodes={episodes} podcastId={podcastId} />);
    expect(screen.queryAllByTestId("episodes-list-table-row")).toHaveLength(2);
  });

  test("must display the correct title", () => {
    render(<EpisodesList episodes={episodes} podcastId={podcastId} />);
    const screenTitle = screen.getAllByTestId("episodes-list-title")[0];
    expect(screenTitle).toHaveTextContent('Episode 620 | "Who Said?"');
  });

  test("must display the correct date", () => {
    render(<EpisodesList episodes={episodes} podcastId={podcastId} />);
    const screenTitle = screen.getAllByTestId("episodes-list-date")[0];
    expect(screenTitle).toHaveTextContent('4/22/2023');
  });

  test("must display the correct duration", () => {
    render(<EpisodesList episodes={episodes} podcastId={podcastId} />);
    const screenTitle = screen.getAllByTestId("episodes-list-duration")[0];
    expect(screenTitle).toHaveTextContent('02:24:25');
  });

  test("must navigate when the title is clicked", async () => {
    render(<EpisodesList episodes={episodes} podcastId={podcastId} />);
    const screenTitle = screen.getAllByTestId("episodes-list-title")[0];
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
    fireEvent.click(screenTitle);
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    await expect(mockedUsedNavigate).toHaveBeenCalledWith(`/podcast/${podcastId}/episode/${episodes[0].trackId}`);
  });
  
});
