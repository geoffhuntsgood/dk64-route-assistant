import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Route } from "../enums";
import { LinkRow } from "./LinkRow";

export const LandingPage = ({ setRoute }: { setRoute: Dispatch<SetStateAction<Route>> }) => {
  const styles = {
    box: {
      height: "95vh",
      width: "95vw",
      margin: "2vh auto 0 auto",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      overflowX: "hidden",
      overflowY: "auto"
    },
    text: {
      textAlign: "center",
      fontFamily: "LuckiestGuy, sans-serif",
      fontSize: "1.2rem",
      color: "maroon",
      backgroundColor: "goldenrod"
    },
    accordion: {
      border: "3px solid maroon",
      borderRadius: "5px",
      margin: "10px auto"
    },
    summary: {
      ".MuiAccordionSummary-content": {
        justifyContent: "center"
      }
    }
  };

  const dropdowns = {
    ...styles.text,
    ...styles.accordion
  };

  return (
    <Grid container sx={styles.box}>
      <Grid item xs={12}>
        <h1 className="header">DK64 ROUTE ASSISTANT</h1>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={styles.text}>**CURRENTLY FOR VC ONLY**</Typography>
        <Typography sx={styles.text}>INTENDED FOR MOBILE OR AS AN OBS SOURCE</Typography>
        <Typography sx={styles.text}>NOTES:</Typography>
        <Typography sx={styles.text}>- LEFT SIDE IS TAG DIRECTION</Typography>
        <Typography sx={styles.text}>- RIGHT SIDE IS GB COUNT</Typography>
        <Typography sx={styles.text}>- CBS ARE IN PARENTHESES</Typography>
        <Typography sx={styles.text}>- THESE SPLIT FILES ARE SIMPLIFIED.</Typography>
        <Typography sx={styles.text}>FOR EXACT SPLITS, DOWNLOAD FROM LIVESPLIT</Typography>
      </Grid>

      <Grid item xs={12}>
        <Accordion sx={dropdowns}>
          <AccordionSummary sx={styles.summary}>
            101
          </AccordionSummary>
          <AccordionDetails>
            <LinkRow
              setRoute={setRoute}
              title={Route.Intermediate101}
              shortTitle="INTERMEDIATE"
              fileName="DK64101VCSimplified.lss"
              refUrl="https://docs.google.com/document/d/170Vu0a63Jnlgt1-KnczI5VV0V6omhFNBV9DnnSNYKAs"
            />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12}>
        <Accordion sx={dropdowns}>
          <AccordionSummary sx={styles.summary}>
            ANY%
          </AccordionSummary>
          <AccordionDetails>
            <LinkRow
              setRoute={setRoute}
              title={Route.AnyPercent1Kong2014}
              shortTitle="1-KONG 2014"
              fileName="DK64Any1Kong2014.lss"
              refUrl="https://docs.google.com/document/d/1GHJMfpSWSD4Ao5acqLS6hTW-f7oSsLytu9Jb8BxWGF0"
            />
            <LinkRow
              setRoute={setRoute}
              title={Route.AnyPercentGlitchless}
              shortTitle="GLITCHLESS"
              fileName="DK64AnyGlitchless.lss"
              refUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzSfCuMvYruNml5sIQm-Z6pPJr3D5TF_KjdvpJVbOlhGBCctCNb-9LVEJ96vnDeA/pubhtml#"
            />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12}>
        <Accordion sx={dropdowns}>
          <AccordionSummary sx={styles.summary}>
            NLE
          </AccordionSummary>
          <AccordionDetails>
            <LinkRow
              setRoute={setRoute}
              title={Route.NoLevelsEarly40BP}
              shortTitle="40 BP"
              fileName=""
              refUrl="https://docs.google.com/document/d/1FcKiAVEQmdBdrY-bf6sr0WSjzSg5KKoCVlpqhgJff7E"
            />
            <LinkRow
              setRoute={setRoute}
              title={Route.NoLevelsEarlyHelmEscape}
              shortTitle="HELM ESCAPE"
              fileName="DK64NLEHelmEscape.lss"
              refUrl="https://docs.google.com/document/d/102A9Ii0M4ZnCHg_obKMCrL6UUvsG7_yP0MJAo7JCJnQ"
            />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};
