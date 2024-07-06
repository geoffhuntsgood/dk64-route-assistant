import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { LandingPage } from "../../components/LandingPage";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn()
}));

describe("LandingPage.tsx Tests", () => {
  test("Renders landing page", () => {
    const rendered = render(<LandingPage />);

    expect(rendered.getByText("DK64 ROUTER (WII U VC)")).toBeInTheDocument();
    expect(rendered.getByText("MAIN CATEGORIES")).toBeInTheDocument();
    expect(rendered.getByText("CATEGORY EXTENSIONS")).toBeInTheDocument();
  });

  test("Simulate checkbox selection", () => {
    const rendered = render(<LandingPage />);
    const checkbox = rendered.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
