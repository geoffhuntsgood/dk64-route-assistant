import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CollectibleLabel } from "../../components/CollectibleLabel";
import { Collectible } from "../../enums";

describe("CollectibleLabel.tsx Tests", () => {
  test("Value 0, display ✔", () => {
    const rendered = render(<CollectibleLabel type={Collectible.NCoin} value={0} />);

    expect(rendered.queryByText("✔")).toBeInTheDocument();
    expect(rendered.queryByAltText("nintendo-coin")).toBeInTheDocument();
  });

  test("Value non-zero, display value", () => {
    const rendered = render(<CollectibleLabel type={Collectible.GB} value={100} />);

    expect(rendered.queryByText("100")).toBeInTheDocument();
    expect(rendered.queryByAltText("golden-banana")).toBeInTheDocument();
  });
});
