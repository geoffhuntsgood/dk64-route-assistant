import { Route, Step } from "../classes";

export const mapItemsToRoute = (route: Route): Route => {
  let bpCount = 0;
  let crownCount = 0;
  let fairyCount = 0;
  let gbCount = 0;
  let keyCount = 0;
  let medalCount = 0;

  route.route.map((item: { name: string; steps: Step[] }) => {
    item.steps.map((step: Step) => {
      const bps = step.bps?.toString();
      if (bps && bps === "x") {
        bpCount++;
        step.bps = bpCount;
      }

      const crowns = step.crowns?.toString();
      if (crowns && crowns === "x") {
        crownCount++;
        step.crowns = crownCount;
      }

      const fairies = step.fairies?.toString();
      if (fairies && fairies.startsWith("x")) {
        fairyCount += parseInt(fairies.split("x")[1]);
        step.fairies = fairyCount;
      }

      const gbs = step.gbs?.toString();
      if (gbs && gbs.startsWith("x")) {
        gbCount += parseInt(gbs.split("x")[1]);
        step.gbs = gbCount;
      }

      const keys = step.keys?.toString();
      if (keys && keys === "x") {
        keyCount++;
        step.keys = keyCount;
      }

      const medals = step.medals?.toString();
      if (medals && medals === "x") {
        medalCount++;
        step.medals = medalCount;
      }
    });
  });
  return route;
};
