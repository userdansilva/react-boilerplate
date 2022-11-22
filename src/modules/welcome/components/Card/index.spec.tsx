import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Card } from ".";

describe("Card Component", () => {
  it("should render properly", () => {
    const { getByTestId } = render(
      <Card title="Test Title">
        Test Description
      </Card>,
    );

    const card = getByTestId("card");

    expect(card).toBeTruthy();
  });

  it("should display title", () => {
    const { queryByText } = render(
      <Card title="Test Title">
        Test Description
      </Card>,
    );

    const title = queryByText("Test Title");

    expect(title).toBeTruthy();
  });

  it("should display description", () => {
    const { getByTestId } = render(
      <Card title="Test Title">
        Test Description
      </Card>,
    );

    const description = getByTestId("card-description");

    expect(description.textContent).toBe("Test Description");
  });
});
