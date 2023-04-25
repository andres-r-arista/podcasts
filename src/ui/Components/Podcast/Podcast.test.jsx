import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

import { rawMockPodcasts } from "../../../application/Mocks/rawMockPodcasts";
import { rawMockPodcastDetails } from "../../../application/Mocks/rawMockPodcastDetails";
import { Podcast } from "./Podcast";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => ({
    podcastId: "1535809341",
  }),
}));

describe("Tests in <Podcast />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    const fakePodcasts = JSON.stringify(rawMockPodcasts);
    const fakePodcastDetails = JSON.stringify(rawMockPodcastDetails);
    fetchMock
      .mockResolvedValueOnce({
        status: 200,
        json() {
          return { contents: fakePodcasts };
        },
      })
      .mockResolvedValueOnce({
        status: 200,
        json() {
          return { contents: fakePodcastDetails };
        },
      });
  });

  test("must match the snapshot", async () => {
    const { container } = render(<Podcast />);
    await waitFor(() => {
      expect(screen.queryByTestId("podcast-sidebar")).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });

  test("must not have a spinner after loading the data", async () => {
    render(<Podcast />);
    await waitFor(() => {
      expect(screen.queryByTestId("podcast-sidebar")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
  });
});
