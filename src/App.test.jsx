import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

import { rawMockPodcasts } from "./application/Mocks/rawMockPodcasts";
import App from "./App";

describe("Tests in <App />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    const fakePodcasts = JSON.stringify(rawMockPodcasts);
    fetchMock.mockResolvedValueOnce({
      status: 200,
      json() {
        return { contents: fakePodcasts };
      },
    });
  });

  test("must match the snapshot", async () => {
    const { container } = render(<App />);
    await waitFor(() => {
      expect(screen.queryByTestId("main")).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });

  test("must not have a spinner after loading podcasts", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.queryByTestId("main")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument()
  });
});
