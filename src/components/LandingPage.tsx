import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { useState } from "react";
import * as routeInfo from "../lists/routeInfo";
import { CategoryDropdown } from "./CategoryDropdown";

export const LandingPage = () => {
  const [progTotals, setProgTotals] = useState(false);

  const progTotalsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgTotals(event.target.checked);
  };

  const styles = {
    box: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      paddingTop: "10px"
    },
    checkbox: {
      padding: "10px",
      fontSize: "1.3rem",
      color: "maroon",
      backgroundColor: "goldenrod",
      width: "100%",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "gold"
      }
    },
    checked: {
      "&.Mui-checked": {
        color: "maroon"
      }
    }
  };

  return (
    <Grid container sx={styles.box}>
      <Grid item xs={12}>
        <h1 className="header">DK64 ROUTER (WII U VC)</h1>
      </Grid>

      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <FormControlLabel
          sx={styles.checkbox}
          label={<Typography sx={{ fontFamily: "LuckiestGuy" }}>Show prog totals</Typography>}
          control={<Checkbox value={progTotals} sx={styles.checked} onChange={progTotalsChange} />}
        />
      </Grid>
      <Grid item xs={4}></Grid>

      <Grid item xs={12}>
        <h2 className="header">MAIN CATEGORIES</h2>
      </Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <CategoryDropdown
          progTotals={progTotals}
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
          progTotals={progTotals}
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
          progTotals={progTotals}
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
          progTotals={progTotals}
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
          progTotals={progTotals}
          header="TAG ANYWHERE"
          routes={[
            routeInfo.tagAnywhereNLE,
            // routeInfo.tagAnywhere101,
          ]}
        />
      </Grid>
    </Grid>
  );
};
