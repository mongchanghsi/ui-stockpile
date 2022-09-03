import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import RandomColorTextSelection from "./index";

describe("RandomColorTextSelection Component", () => {
  it("should render", async () => {
    const { findByText } = render(<RandomColorTextSelection />);

    const loremText = await findByText(/lorem/i);

    expect(loremText).toBeTruthy();
  });
});
