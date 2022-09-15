import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProgressBar from "./index";

describe("ProgressBar Component", () => {
  it("should render", async () => {
    const { findByText } = render(
      <ProgressBar currentValue={50} maxValue={120} />
    );

    const maxValueText = await findByText(/120/i);

    expect(maxValueText).toBeTruthy();
  });
});
