import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { ItemsList } from "./ItemsList";

describe("ItemList", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of tasks", () => {
    const mockListItems = [
      {
        id: 1234,
        title: "test title",
        desciption: "test description",
        status: "pending",
      },
    ];

    const { getByRole } = render(<ItemsList itemsList={mockListItems} />);
    const unorderedList = getByRole("list");

    expect(unorderedList.tagName).toBe("UL");
    expect(unorderedList.children.length).toBe(1);
    expect(unorderedList.firstElementChild.tagName).toBe("LI");
  });

  it("should render a message with text empty list", () => {
    const mockEmptyList = [];

    const { getByText } = render(<ItemsList itemsList={mockEmptyList} />);
    const headingEmptyList = getByText("Empty list");

    expect(headingEmptyList.textContent).toBe("Empty list");
    expect(headingEmptyList.tagName).toBe("H3");

  });
});
