import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { RouteInfo } from "../classes";
import { LinkRow } from "./LinkRow";

export const CategoryDropdown = ({
  progTotals,
  header,
  routes
}: {
  progTotals: boolean,
  header: string,
  routes: RouteInfo[]
}) => {
  const styles = {
    dropdown: {
      fontFamily: "LuckiestGuy, sans-serif",
      fontSize: "1.5rem",
      color: "maroon",
      backgroundColor: "goldenrod"
    },
    summary: {
      ".MuiAccordionSummary-content": {
        justifyContent: "center"
      }
    }
  }

  return (
    <Accordion sx={styles.dropdown}>
      <AccordionSummary sx={styles.summary}>
        {header}
      </AccordionSummary>
      <AccordionDetails>
        {routes.map((routeInfo: RouteInfo) => (
          <LinkRow
            key={routeInfo.name}
            progTotals={progTotals}
            routeInfo={routeInfo}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  )
};