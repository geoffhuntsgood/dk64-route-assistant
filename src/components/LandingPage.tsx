import { Grid } from "@mui/material";
import * as routeInfo from "../lists/routeInfo";
import { CategoryDropdown } from "./CategoryDropdown";

export const LandingPage = () => {
  const styles = {
    box: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      paddingTop: "10px"
    }
  };

  return (
    <Grid container sx={styles.box}>
      <Grid item xs={12}>
        <h1 className="header">DK64 ROUTE ASSISTANT (WII U VC)</h1>
      </Grid>

      <Grid item xs={12}>
        <h2 className="header">MAIN CATEGORIES</h2>
      </Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <CategoryDropdown
          header="101%"
          routes={[
            routeInfo.beginner101,
            routeInfo.intermediate101,
            routeInfo.expert101
          ]}
        />
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <CategoryDropdown
          header="ANY%"
          routes={[
            routeInfo.anyPercent5Kong,
            routeInfo.anyPercent2014,
            routeInfo.anyPercent2015
          ]}
        />
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <CategoryDropdown
          header="NLE"
          routes={[
            routeInfo.nleIntermediate40BP,
            routeInfo.nle40,
            routeInfo.nleHelmEscape
          ]}
        />
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={12}>
        <h2 className="header">CATEGORY EXTENSIONS</h2>
      </Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <CategoryDropdown
          header="GLITCHLESS"
          routes={[
            routeInfo.glitchlessAnyPercent
          ]}
        />
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <CategoryDropdown
          header="TAG ANYWHERE"
          routes={[
            routeInfo.tagAnywhereNLE
          ]}
        />
      </Grid>
    </Grid>
  );
};
