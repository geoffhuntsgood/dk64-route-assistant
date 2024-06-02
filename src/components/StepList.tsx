import { Box, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Step } from "../classes";
import { StepContainer } from "./StepContainer";

export const StepList = () => {
  const routeInfo = useLocation().state.routeInfo;

  // const download = () => {
  //   new JsFileDownloader({
  //     url: `public/splits/${routeInfo.fileName}`
  //   });
  // };

  const styles = {
    box: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden"
    },
    contents: {
      height: "92vh",
      width: "100vw",
      overflowX: "hidden",
      overflowY: "auto"
    },
    firstLink: {
      padding: "12px 0 0 5px"
    },
    lastLink: {
      padding: "12px 0"
    }
  };

  return (
    <Box sx={styles.box}>
      <Grid container>
        <Grid item xs={1} sx={styles.firstLink}>
          <a href="/dk64router" className="header">BACK</a>
        </Grid>
        <Grid item xs={10}>
          <h1 className="header">{routeInfo.name}</h1>
        </Grid>
      </Grid>

      <Grid container sx={styles.contents}>
        {routeInfo.steps.map((step: Step, index: number) => {
          return (
            <Grid item xs={12} key={index}>
              <StepContainer step={step} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
