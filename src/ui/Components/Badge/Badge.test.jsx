import { render, screen } from "@testing-library/react";

import { Badge } from "./Badge";

describe("Tests in <Badge />", () => {
  test("must match the snapshot", () => {
    const { container } = render(<Badge label={"5"} />);
    expect(container).toMatchSnapshot();
  });

  test("must print the label", () => {
    render(<Badge label={"15"} />);
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveTextContent("15");
  });
});
