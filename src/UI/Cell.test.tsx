import { fireEvent, render, screen } from "@testing-library/react";

import Cell from "./Cell";

describe("<Cell />", () => {
  test("renders Cell properly", () => {
    const { container } = render(
      <Cell xCor={0} yCor={0} isFilled={true} onCellClick={() => {}} />
    );
    expect(container).toBeTruthy();
  });

  test("renders filled Cell properly", () => {
    render(<Cell xCor={0} yCor={0} isFilled={true} onCellClick={() => {}} />);
    const cellElm = screen.getByTestId("cell-unit");
    expect(cellElm.classList.contains("filled")).toBe(true);
  });

  test("renders empty Cell properly", () => {
    render(<Cell xCor={0} yCor={0} isFilled={false} onCellClick={() => {}} />);
    const cellElm = screen.getByTestId("cell-unit");
    expect(cellElm.classList.contains("filled")).toBe(false);
  });
});
