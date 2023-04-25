import { render, screen, fireEvent } from "@testing-library/react";

import { PodcastCard } from "./PodcastCard";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const title = "Title";
const author = "Author";
const imgUrl = "http://www.google.com";
const id = "123";

describe("Tests in <PodcastCard />", () => {
  test("must match the snapshot", () => {
    const { container } = render(
      <PodcastCard title={title} author={author} imgUrl={imgUrl} id={id} />
    );
    expect(container).toMatchSnapshot();
  });

  test("must display the correct image url", () => {
    render(
      <PodcastCard title={title} author={author} imgUrl={imgUrl} id={id} />
    );
    const screenImage = screen.getByTestId("podcast-card-image");
    expect(screenImage.src).toContain("http://www.google.com");
  });

  test("must display the correct title", () => {
    render(
      <PodcastCard title={title} author={author} imgUrl={imgUrl} id={id} />
    );
    const screenTitle = screen.getByTestId("podcast-card-title");
    expect(screenTitle).toHaveTextContent("Title");
  });

  test("must display the correct author", () => {
    render(
      <PodcastCard title={title} author={author} imgUrl={imgUrl} id={id} />
    );
    const screenAuthor = screen.getByTestId("podcast-card-author");
    expect(screenAuthor).toHaveTextContent(`Author: ${author}`);
  });

  test("must navigate when the box is clicked", async () => {
    render(
      <PodcastCard title={title} author={author} imgUrl={imgUrl} id={id} />
    );
    const box = screen.getByTestId("podcast-card-box");
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
    fireEvent.click(box);
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    await expect(mockedUsedNavigate).toHaveBeenCalledWith(`/podcast/${id}`);
  });
});
