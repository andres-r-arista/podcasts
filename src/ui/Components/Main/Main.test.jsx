import { render, screen, fireEvent } from "@testing-library/react";

import { formattedMockPodcasts } from "../../../application/Mocks/formattedMockPodcasts";
import { Main } from "./Main";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Tests in <Main />", () => {
  test("must match the snapshot", () => {
    const { container } = render(<Main podcasts={formattedMockPodcasts} />);
    expect(container).toMatchSnapshot();
  });

  test("must have no podcast cards if receiving no podcasts", () => {
    render(<Main podcasts={[]} />);
    expect(screen.queryAllByTestId("podcast-card")).toHaveLength(0);
  });

  test("must have two podcast cards if receiving two podcasts", () => {
    render(<Main podcasts={formattedMockPodcasts} />);
    expect(screen.queryAllByTestId("podcast-card")).toHaveLength(2);
  });

  test("must have a filter bar", () => {
    render(<Main podcasts={formattedMockPodcasts} />);
    expect(screen.getByTestId("filter-bar"));
  });

  test("must filter the podcasts by title (case insensitive) when entering a string in the filter bar input", () => {
    render(<Main podcasts={formattedMockPodcasts} />);
    expect(screen.queryAllByTestId("podcast-card")).toHaveLength(2);
    const screenInput= screen.getByTestId("filter-bar-input");
    fireEvent.change(screenInput, { target: { value: 'the joe budden podcast' } });
    expect(screen.queryAllByTestId("podcast-card")).toHaveLength(1);
  });

  test("must filter the podcasts by author (case insensitive) when entering a string in the filter bar input", () => {
    render(<Main podcasts={formattedMockPodcasts} />);
    expect(screen.queryAllByTestId("podcast-card")).toHaveLength(2);
    const screenInput= screen.getByTestId("filter-bar-input");
    fireEvent.change(screenInput, { target: { value: 'the joe budden network' } });
    expect(screen.queryAllByTestId("podcast-card")).toHaveLength(1);
  });
});
