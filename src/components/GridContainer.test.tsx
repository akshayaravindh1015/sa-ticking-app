import { fireEvent, render, screen } from "@testing-library/react";
import { initalize2D_Arr } from "../models/grid.model";
import TickContextProvider, { TickContext } from "../store/tick.context";

import GridContainer from "./GridContainer";

describe("<GridContainer />", () => {
  test("renders GridContainer properly", () => {
    const { container } = render(<GridContainer />);
    expect(container).toBeTruthy();
  });

  const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
    return render(
      <TickContext.Provider {...providerProps}>{ui}</TickContext.Provider>,
      renderOptions
    );
  };

  test("GridContainer renders correct numer of cells", () => {
    const expectedLen = 10;
    const providerProps = {
      value: {
        grid: initalize2D_Arr(expectedLen),
      },
    };
    customRender(<GridContainer />, { providerProps });
    const gridContainer: any = screen.getByTestId("gird-container");
    const idx = `${Object.keys(gridContainer)[0]}`;
    expect(gridContainer[idx].pendingProps.children.length).toBe(expectedLen);
  });

  //   test("GridContainer renders correct numer of cells", () => {
  //     const wrapper = ({
  //       children,
  //       grid,
  //     }: {
  //       children: any;
  //       grid: number[][];
  //     }) => <TickContextProvider>{children}</TickContextProvider>;
  //     render(<GridContainer />, { wrapper });
  //     const gridContainer: any = screen.getByTestId("gird-container");
  //     const idx = `${Object.keys(gridContainer)[0]}`;
  //     console.log(gridContainer[idx].pendingProps.children.length);
  //     expect(screen.getByText("Testing")).toBeInTheDocument();
  //   });
});
