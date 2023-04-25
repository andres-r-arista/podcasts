import { render, screen, fireEvent } from "@testing-library/react";

import { PodcastSidebar } from "./PodcastSidebar";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const title = "Title";
const author = "Author";
const imgUrl = "http://www.google.com";
const id = "123";
const description = "Description";
const className = "test"

describe("Tests in <PodcastSidebar />", () => {
  test("must match the snapshot", () => {
    const { container } = render(
      <PodcastSidebar title={title} author={author} imgUrl={imgUrl} id={id} description={description} className={className} />
    );
    expect(container).toMatchSnapshot();
  });

  test("must display the correct image url", () => {
    render(
      <PodcastSidebar title={title} author={author} imgUrl={imgUrl} id={id} description={description} className={className} />
    );
    const screenImage = screen.getByTestId("podcast-sidebar-image");
    expect(screenImage.src).toContain("http://www.google.com");
  });

  test("must display the correct title", () => {
    render(
      <PodcastSidebar title={title} author={author} imgUrl={imgUrl} id={id} description={description} className={className} />
    );
    const screenTitle = screen.getByTestId("podcast-sidebar-title");
    expect(screenTitle).toHaveTextContent("Title");
  });

  test("must display the correct author", () => {
    render(
      <PodcastSidebar title={title} author={author} imgUrl={imgUrl} id={id} description={description} className={className} />
    );
    const screenAuthor = screen.getByTestId("podcast-sidebar-author");
    expect(screenAuthor).toHaveTextContent(`by ${author}`);
  });

  test("must display the correct description", () => {
    render(
      <PodcastSidebar title={title} author={author} imgUrl={imgUrl} id={id} description={description} className={className} />
    );
    const screenTitle = screen.getByTestId("podcast-sidebar-description");
    expect(screenTitle).toHaveTextContent("Description");
  });

  test("must navigate when the img is clicked", async () => {
    render(
      <PodcastSidebar title={title} author={author} imgUrl={imgUrl} id={id} description={description} className={className} />
    );
    const screenImage = screen.getByTestId("podcast-sidebar-image");
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
    fireEvent.click(screenImage);
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    await expect(mockedUsedNavigate).toHaveBeenCalledWith(`/podcast/${id}`);
  });

  test("must navigate when the box is clicked", async () => {
    render(
      <PodcastSidebar title={title} author={author} imgUrl={imgUrl} id={id} description={description} className={className} />
    );
    const screenBox = screen.getByTestId("podcast-sidebar-box");
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
    fireEvent.click(screenBox);
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    await expect(mockedUsedNavigate).toHaveBeenCalledWith(`/podcast/${id}`);
  });

});
