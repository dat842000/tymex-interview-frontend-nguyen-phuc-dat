import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";
import { IAuthor } from "../types/author";
import "@testing-library/jest-dom";

jest.mock("./ImgIcon", () => ({ src, alt }: { src: string; alt?: string }) => (
  <img src={src} alt={alt || "icon"} />
));

describe("Avatar Component", () => {
  const mockAuthor: IAuthor = {
    firstName: "John",
    lastName: "Doe",
    email: "test@gmail.com",
    gender: "Male",
    avatar: "/images/avatar.jpg",
    onlineStatus: "online",
  };

  it("renders author avatar correctly", () => {
    render(<Avatar author={mockAuthor} />);

    // Verify the avatar image is rendered
    const avatarImg = screen.getByAltText("avatar-author");
    expect(avatarImg).toBeInTheDocument();
    expect(avatarImg).toHaveAttribute("src", "/images/avatar.jpg");
  });

  it("displays online status icon when the author is online", () => {
    render(<Avatar author={mockAuthor} />);

    // Verify the online status icon is rendered
    const statusImg = screen.getByAltText("status");
    expect(statusImg).toBeInTheDocument();
    expect(statusImg).toHaveAttribute("src", "/icons/status-online.svg");
  });

  it("displays offline status icon when the author is offline", () => {
    const offlineAuthor = { ...mockAuthor, onlineStatus: "offline" };
    render(<Avatar author={offlineAuthor} />);

    // Verify the offline status icon is rendered
    const statusImg = screen.getByAltText("status");
    expect(statusImg).toBeInTheDocument();
    expect(statusImg).toHaveAttribute("src", "/icons/status-other.svg");
  });
  it("displays offline status icon when the author is idle", () => {
    const offlineAuthor = { ...mockAuthor, onlineStatus: "idle" };
    render(<Avatar author={offlineAuthor} />);

    // Verify the offline status icon is rendered
    const statusImg = screen.getByAltText("status");
    expect(statusImg).toBeInTheDocument();
    expect(statusImg).toHaveAttribute("src", "/icons/status-other.svg");
  });
  it("displays offline status icon when the author is busy", () => {
    const offlineAuthor = { ...mockAuthor, onlineStatus: "busy" };
    render(<Avatar author={offlineAuthor} />);

    // Verify the offline status icon is rendered
    const statusImg = screen.getByAltText("status");
    expect(statusImg).toBeInTheDocument();
    expect(statusImg).toHaveAttribute("src", "/icons/status-other.svg");
  });
});
