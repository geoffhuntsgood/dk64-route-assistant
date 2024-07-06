import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { RouteInfo } from "../../classes";
import { LinkRow } from "../../components/LinkRow";
import { krool } from "../../utils/sections";

const mockUseNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate
}));

describe("LinkRow.tsx Tests", () => {
  const getRouteInfo = (docUrl: string = ""): RouteInfo => {
    return new RouteInfo("TEST ROUTE", docUrl, [krool]);
  };

  test("Simulate navigation with GDOC link", () => {
    const routeInfo = getRouteInfo("https://docs.google.com");
    const rendered = render(<LinkRow progTotals={false} routeInfo={routeInfo} />);

    expect(rendered.queryByText("TEST")).toBeInTheDocument();
    expect(rendered.queryByText("GDOC")).toBeInTheDocument();
    fireEvent.click(rendered.getByText("TEST"));
    expect(mockUseNavigate).toHaveBeenCalledWith("/route", { state: { progTotals: false, routeInfo: routeInfo } });
  });

  test("Simulate navigation without GDOC link", () => {
    const routeInfo = getRouteInfo();
    const rendered = render(<LinkRow progTotals={true} routeInfo={routeInfo} />);

    expect(rendered.queryByText("TEST")).toBeInTheDocument();
    expect(rendered.queryByText("GDOC")).not.toBeInTheDocument();
    fireEvent.click(rendered.getByText("TEST"));
    expect(mockUseNavigate).toHaveBeenCalledWith("/route", { state: { progTotals: true, routeInfo: routeInfo } });
  });
});
