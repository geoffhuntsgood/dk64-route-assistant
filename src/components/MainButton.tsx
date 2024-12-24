import { Button, Grid2 } from "@mui/material";
import { Route } from "../classes";
import { styles } from "../utils/styles";

export const MainButton = ({
  route,
  setRoute
}: {
  route: Route;
  setRoute: Function;
}) => (
  <Grid2 container spacing={2} sx={{ width: "98%" }}>
    <Grid2 size={{ xs: route.doc ? 10 : 12 }}>
      <Button
        sx={styles.dkButton}
        variant="contained"
        onClick={() => setRoute(route)}
      >
        {route.name}
      </Button>
    </Grid2>
    {route.doc && (
      <Grid2 size={2}>
        <a target="_blank" rel="noopener noreferrer" href={route.doc}>
          <Button sx={styles.dkButton} variant="contained">
            {`${route.docIsVid ? "VID" : "DOC"}`}
          </Button>
        </a>
      </Grid2>
    )}
  </Grid2>
);
