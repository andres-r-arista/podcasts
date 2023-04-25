import { render } from "@testing-library/react";

import { Spinner } from "./Spinner";

describe("Tests in <Spinner />", () => {
  
  test("must match the snapshot", () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

});
