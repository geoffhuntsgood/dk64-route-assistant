import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Step } from "../classes/Step";
import { Route } from "../enums";
import { any1Kong2014, anyGlitchless, intermediate101, nle40bp, nleHelmEscape } from "../lists";
import { StepContainer } from "./StepContainer";

export const StepList = ({
  route,
  setRoute
}: {
  route: Route,
  setRoute: Dispatch<SetStateAction<Route>>
}) => {
  const [list, setList] = useState([] as Step[]);

  useEffect(() => {
    switch (route) {
      case Route.AnyPercent1Kong2014:
        setList(any1Kong2014);
        break;
      case Route.AnyPercentGlitchless:
        setList(anyGlitchless);
        break;
      case Route.Intermediate101:
        setList(intermediate101);
        break;
      case Route.NoLevelsEarly40BP:
        setList(nle40bp);
        break;
      case Route.NoLevelsEarlyHelmEscape:
        setList(nleHelmEscape);
        break;
      default:
        setList([]);
        break;
    }
  }, []);

  const styles = {
    box: {
      display: "grid",
      height: "95vh",
      width: "95vw",
      margin: "2vh auto 0 auto",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.3)"
    },
    contents: {
      overflowX: "hidden",
      overflowY: "auto"
    }
  };

  return (
    <Grid container sx={styles.box}>
      <Grid item xs={12}>
        <h1 className="header">{route}</h1>
        <h3 className="header" onClick={() => setRoute(Route.None)}>◄</h3>
      </Grid>
      <Grid container sx={styles.contents}>
        {list.map((step: Step, index: number) => {
          return (
            <Grid item xs={12} key={index}>
              <StepContainer step={step} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
