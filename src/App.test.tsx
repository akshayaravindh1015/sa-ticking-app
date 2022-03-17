import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  beforeEach(() => {
    const { container } = render(<App />);
  });

  test("renders header properly", () => {
    const hedingElement = screen.getByText(/Seeking Alpha React - Test/i);
    expect(hedingElement).toBeInTheDocument();
  });

  test("Start ticking is toggling properly", () => {
    const tickButton = screen.getByText(/Start Ticking/i);
    fireEvent.click(tickButton);
    expect(screen.getByText(/Stop Ticking/i)).toBeInTheDocument();
  });

  test("Generate random map button stops ticking", () => {
    const generateRandomBtn = screen.getByText(/Generate Random Grid/i);
    fireEvent.click(generateRandomBtn);
    expect(screen.getByText(/Start Ticking/i)).toBeInTheDocument();
  });
});
