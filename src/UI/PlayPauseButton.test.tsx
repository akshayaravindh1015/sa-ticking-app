import { fireEvent, render, screen } from "@testing-library/react";

import PlayPauseButton from "./PlayPauseButton";

describe("<PlayPauseButton />", () => {
  test("renders PlayPauseButton properly", () => {
    const { container } = render(
      <PlayPauseButton
        isOn={false}
        onText="ON TEXT"
        offText="OFF TEXT"
        onClick={() => {}}
      />
    );
    expect(container).toBeTruthy();
  });

  test("PlayPauseButton intial State is loading fine", () => {
    const offText = "OFF TEXT";
    const onText = "ON TEXT";
    render(
      <PlayPauseButton
        isOn={false}
        onText={onText}
        offText={offText}
        onClick={() => {}}
      />
    );
    const spanTextElm: any = screen.getByTestId("play-pause-text");
    const idx = `${Object.keys(spanTextElm)[0]}`;
    expect(spanTextElm[idx].pendingProps.children).toBe(onText);
  });

  test("PlayPauseButton click is working as expected", () => {
    const offText = "OFF TEXT";
    const onText = "ON TEXT";
    render(
      <PlayPauseButton
        isOn={true}
        onText={onText}
        offText={offText}
        onClick={() => {}}
      />
    );
    const buttonEl = screen.getByRole("button");
    fireEvent.click(buttonEl);
    const spanTextElm: any = screen.getByTestId("play-pause-text");
    const idx = `${Object.keys(spanTextElm)[0]}`;
    expect(spanTextElm[idx].pendingProps.children).toBe(offText);
  });
});
