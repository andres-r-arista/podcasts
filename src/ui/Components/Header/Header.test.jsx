import { render, screen, fireEvent } from "@testing-library/react";

import { Header } from "./Header";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Tests in <Header />", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });

  test("must match the snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  test("must have a title that says 'PodCaster'", () => {
    render(<Header />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("PodCaster");
  });

  test("Clicking on the title navigates to '/'", async () => {
    render(<Header />);
    const title = screen.getByTestId("title");
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
    fireEvent.click(title);
    await expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    await expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});
