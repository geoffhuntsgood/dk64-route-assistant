import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { StepContainer } from "../../components/StepContainer";
import { Color, Tag } from "../../enums";

describe("StepContainer.tsx Tests", () => {
  test("Renders as a header when color is set to Header", () => {
    const step = {
      color: Color.Header,
      text: "Header Time"
    };
    const rendered = render(<StepContainer step={step} progTotals={false} />);
    const item = rendered.queryByText("Header Time");
    expect(item).toBeInTheDocument();
    expect(item?.parentElement).toHaveStyle({ "display": "grid", "justify-content": "center", "background-color": "rgb(192, 192, 192)" });
  });

  test("Renders with a link when present", () => {
    const step = {
      color: Color.DK,
      text: "Here's a link",
      link: "https://www.google.com"
    };
    const rendered = render(<StepContainer step={step} progTotals={false} />);
    expect(rendered.queryByText("vid")).toBeInTheDocument();
  });

  test("Renders with no totals when progTotals is false and none are present", () => {
    const step = {
      color: Color.DK,
      tag: Tag.Left,
      text: "Do a thing!"
    };
    const rendered = render(<StepContainer step={step} progTotals={false} />);
    const item = rendered.queryByText("[L] Do a thing!");

    expect(item).toBeInTheDocument();
    expect(item?.parentElement).toHaveStyle({ "background-color": "rgb(218, 165, 32)" });
    expect(rendered.queryByRole("img")).not.toBeInTheDocument();
  });

  test("Renders with no totals when progTotals is false and totals are present", () => {
    const step = {
      color: Color.Chunky,
      text: "Do a thing for a GB!",
      totals: {
        gbs: 1
      }
    };
    const rendered = render(<StepContainer step={step} progTotals={false} />);
    expect(rendered.queryByAltText("golden-banana")).not.toBeInTheDocument();
  });

  test("Renders with no totals when progTotals is true and none are present", () => {
    const step = {
      color: Color.Tiny,
      text: "No totals here"
    };
    const rendered = render(<StepContainer step={step} progTotals={true} />);
    expect(rendered.queryByRole("img")).not.toBeInTheDocument();
  });

  test("Renders with totals when progTotals is true and totals are present", () => {
    const step = {
      color: Color.Lanky,
      text: "You got a lot of stuff here",
      totals: {
        gbs: 1,
        bps: 2,
        fairies: 3,
        crowns: 4,
        keys: 5,
        medals: 6,
        nCoin: true,
        rCoin: true
      }
    };
    const rendered = render(<StepContainer step={step} progTotals={true} />);
    expect(rendered.queryByAltText("golden-banana")).toBeInTheDocument();
    expect(rendered.queryByAltText("blueprint")).toBeInTheDocument();
    expect(rendered.queryByAltText("banana-fairy")).toBeInTheDocument();
    expect(rendered.queryByAltText("battle-crown")).toBeInTheDocument();
    expect(rendered.queryByAltText("boss-key")).toBeInTheDocument();
    expect(rendered.queryByAltText("banana-medal")).toBeInTheDocument();
    expect(rendered.queryByAltText("nintendo-coin")).toBeInTheDocument();
    expect(rendered.queryByAltText("rareware-coin")).toBeInTheDocument();
  });
});
