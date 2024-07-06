import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { RouteInfo } from "../../classes";
import { CategoryDropdown } from "../../components/CategoryDropdown";
import { krool } from "../../utils/sections";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn()
}));

describe("CategoryDropdown.tsx Tests", () => {
  test("Renders Accordion and child routes", () => {
    const routes = [
      new RouteInfo("ROUTE1 TEST", "", [krool]),
      new RouteInfo("ROUTE2 TEST", "", [krool])
    ];
    const rendered = render(<CategoryDropdown progTotals={false} header="TEST HEADER" routes={routes} />);

    expect(rendered.queryByText("TEST HEADER")).toBeInTheDocument();
    expect(rendered.queryByText("ROUTE1")).toBeInTheDocument();
    expect(rendered.queryByText("ROUTE2")).toBeInTheDocument();
  });
});
