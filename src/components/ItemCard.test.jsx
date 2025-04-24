import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { ItemCard } from "./ItemCard";

describe("ItemCard", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list item with the correct styles according with the status done", () => {
    const mockListItem = {
      id: 1,
      title: "test title",
      description: "test description",
      status: "done",
    };

    const { getByRole } = render(<ItemCard item={mockListItem} />);
    const listItem = getByRole("listitem");
    const spanStatus = listItem.querySelector("span");

    expect(spanStatus.className).toMatch(/item__status--grey/);
  });

  it("should render a list item with the correct styles according with the status in progress", () => {
    const mockListItem = {
      id: 1,
      title: "test title",
      description: "test description",
      status: "in progress",
    };

    const { getByRole } = render(<ItemCard item={mockListItem} />);
    const listItem = getByRole("listitem");
    const spanStatus = listItem.querySelector("span");

    expect(spanStatus.className).toMatch(/item__status--blue/);
  });

  it("should render a list item with the correct styles according with the status pending", () => {
    const mockListItem = {
      id: 1,
      title: "test title",
      description: "test description",
      status: "pending",
    };

    const { getByRole } = render(<ItemCard item={mockListItem} />);
    const listItem = getByRole("listitem");
    const spanStatus = listItem.querySelector("span");

    expect(spanStatus.className).toMatch(/item__status--green/);
  });
});
