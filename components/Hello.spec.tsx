import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

describe("Hello", () => {
  it("挨拶が表示される", () => {
    render(<Hello />);

    const heading = screen.getByRole("heading", {
      name: "Hello NoteNote World!",
    });

    expect(heading).toBeInTheDocument();
  });
});
