import { render, screen } from "@testing-library/react";

import { EpisodesTitle } from "./EpisodesTitle";


describe("Tests in <EpisodesTitle />", () => {
  test("must match the snapshot", () => {
    const { container } = render(<EpisodesTitle amount={10} />);
    expect(container).toMatchSnapshot();
  });

  test("must display the amount", () => {
    render(<EpisodesTitle amount={10} />);
    const screenDescription = screen.getByTestId("episodes-title-amount");
    expect(screenDescription).toHaveTextContent("10");
  });

});
