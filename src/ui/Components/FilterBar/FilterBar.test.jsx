import { render, screen, fireEvent } from "@testing-library/react";

import { FilterBar } from "./FilterBar";

const onChange = jest.fn();

describe("Tests in <FilterBar />", () => {
  test("must match the snapshot", () => {
    const { container } = render(<FilterBar podcastsAmount={5} onChange={onChange} />);
    expect(container).toMatchSnapshot();
  });

  test("must call onChange function when changing the input", () => {
    render(<FilterBar podcastsAmount={5} onChange={onChange} />);
    expect(onChange.mock.calls).toHaveLength(0);
    const input= screen.getByTestId("filter-bar-input");
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(onChange.mock.calls).toHaveLength(1);
  })

});
