import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { RouteSection } from "../classes";
import { allBeginner, allExpert, allIntermediate, any1Kong2014, any1Kong2015, any5Kong, glitchless101, glitchlessAny, nle40bp, nleHE, nleIntermediate, taNLE } from "../lists";
import { styles } from "../utils/styles";

export const LandingPage = () => {
  const navigate = useNavigate();

  const select = (name: string, route: RouteSection[]) => {
    navigate("/route", { state: { name, route } });
  };

  return (
    <Grid container spacing={0.2} style={{ overflowX: "hidden", overflowY: "auto" }}>
      <Grid item xs={12}>
        <Typography sx={styles.header}>DK64 ROUTER</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography sx={styles.header}>101 PERCENT</Typography>
      </Grid>
      <Grid item md={1.5} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("101 BEGINNER", allBeginner)}>
          BEGINNER
        </Button>
      </Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("101 INTERMEDIATE", allIntermediate)}>
          INTERMEDIATE
        </Button>
      </Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("101 EXPERT", allExpert)}>
          EXPERT
        </Button>
      </Grid>
      <Grid item md={1.5} xs={1}></Grid>

      <Grid item xs={12}>
        <Typography sx={styles.header}>ANY PERCENT</Typography>
      </Grid>
      <Grid item md={1.5} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("ANY 5 KONG", any5Kong)}>
          5 KONG
        </Button>
      </Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("ANY 1 KONG 2014", any1Kong2014)}>
          1 KONG 2014
        </Button>
      </Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("ANY 1 KONG 2015", any1Kong2015)}>
          1 KONG 2015
        </Button>
      </Grid>
      <Grid item md={1.5} xs={1}></Grid>

      <Grid item xs={12}>
        <Typography sx={styles.header}>NO LEVELS EARLY</Typography>
      </Grid>
      <Grid item md={1.5} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("NLE INTERMEDIATE", nleIntermediate)}>
          INTERMEDIATE
        </Button>
      </Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("NLE 40 BP", nle40bp)}>
          40 BP
        </Button>
      </Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("NLE HELM ESCAPE", nleHE)}>
          HELM ESCAPE
        </Button>
      </Grid>
      <Grid item md={1.5} xs={1}></Grid>

      <Grid item xs={12}>
        <Typography sx={styles.header}>GLITCHLESS</Typography>
      </Grid>
      <Grid item md={3} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("ANY GLITCHLESS", glitchlessAny)}>
          ANY PERCENT
        </Button>
      </Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={0.01} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("101 GLITCHLESS", glitchless101)}>
          101 PERCENT
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Typography sx={styles.header}>TAG ANYWHERE</Typography>
      </Grid>
      <Grid item md={4.5} xs={1}></Grid>
      <Grid item md={3} xs={10}>
        <Button sx={styles.button} variant="contained" onClick={() => select("NLE TAG ANYWHERE", taNLE)}>
          NLE
        </Button>
      </Grid>
      <Grid item md={4.5} xs={1}></Grid>
    </Grid>
  );
};
