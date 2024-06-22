import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RouteInfo } from "../classes";

export const LinkRow = ({
  progTotals,
  routeInfo
}: {
  progTotals: boolean,
  routeInfo: RouteInfo
}
) => {
  const navigate = useNavigate();

  const click = () => {
    navigate("/route", { state: { routeInfo, progTotals } });
  };

  const styles = {
    container: {
      border: "3px solid maroon",
      borderRadius: "5px"
    },
    button: {
      fontFamily: "LuckiestGuy",
      fontSize: "1.3rem",
      color: "maroon",
      backgroundColor: "goldenrod",
      width: "100%",
      "&:hover": {
        backgroundColor: "gold"
      }
    }
  };

  return (
    <Grid container sx={styles.container}>
      {routeInfo.docUrl.length > 0 &&
        <>
          <Grid item xs={9}>
            <Button sx={styles.button} variant="contained" onClick={() => click()}>
              {routeInfo.name.split(" ")[0]}
            </Button>
          </Grid>
          <Grid item xs={3}>
            <a target="_blank" rel="noopener noreferrer" href={routeInfo.docUrl}>
              <Button sx={styles.button} variant="contained">GDOC</Button>
            </a>
          </Grid>
        </>
      }
      {routeInfo.docUrl.length === 0 &&
        <Grid item xs={12}>
          <Button sx={styles.button} variant="contained" onClick={() => click()}>
            {routeInfo.name.split(" ")[0]}
          </Button>
        </Grid>
      }
    </Grid>
  );
};
