import { Grid, Typography } from "@mui/material";
import { styles } from "../utils/styles";
import { LandingPageButton } from "./LandingPageButton";

export const LandingPage = () => (
  <Grid container spacing={0.2} style={{ overflowX: "hidden", overflowY: "auto" }}>
    <Grid item xs={12}>
      <Typography sx={styles.header}>DK64 ROUTER</Typography>
    </Grid>

    <Grid item xs={12}>
      <Typography sx={styles.header}>ANY%</Typography>
    </Grid>
    <LandingPageButton name="5-KONG" path="any5kong" doc="https://docs.google.com/document/d/1RUVlR1d1uts04_2vc1uSO4NcoKi3LMY6bad2QaWipTE" />
    <LandingPageButton name="1-KONG 2014" path="any1kong2014" doc="https://docs.google.com/document/d/1GHJMfpSWSD4Ao5acqLS6hTW-f7oSsLytu9Jb8BxWGF0" />
    <LandingPageButton name="1-KONG 2015" path="any1kong2015" doc="https://pastebin.com/ezTY6uAx" />

    <Grid item xs={12}>
      <Typography sx={styles.header}>101%</Typography>
    </Grid>
    <LandingPageButton name="BEGINNER" path="101beginner" doc="https://docs.google.com/document/d/1IXTi3nh70Gps8G_BlEo2kquOix47i_qjQ1WKIhCk8n4" />
    <LandingPageButton name="INTERMEDIATE" path="101intermediate" doc="https://docs.google.com/document/d/170Vu0a63Jnlgt1-KnczI5VV0V6omhFNBV9DnnSNYKAs" />
    <LandingPageButton name="EXPERT" path="101expert" doc="https://docs.google.com/document/d/1ZCZRdYDDtHwMQmaCej44c1ckG322ydA1ErtLoz-pESY" />

    <Grid item xs={12}>
      <Typography sx={styles.header}>NO LEVELS EARLY</Typography>
    </Grid>
    <LandingPageButton name="INTERMEDIATE" path="nleintermediate" doc="https://docs.google.com/document/d/1FcKiAVEQmdBdrY-bf6sr0WSjzSg5KKoCVlpqhgJff7E" />
    <LandingPageButton name="ADVANCED 40 BP" path="nleadvanced40bp" doc="https://docs.google.com/document/d/1sFHSe1E7cYfLC6ahBJqFTqcs_qussrKYNd_sRpcLYWw" />
    <LandingPageButton name="HELM ESCAPE" path="nlehelmescape" doc="https://docs.google.com/document/d/102A9Ii0M4ZnCHg_obKMCrL6UUvsG7_yP0MJAo7JCJnQ" />

    <Grid item xs={12}>
      <Typography sx={styles.header}>CATEGORY EXTENSIONS</Typography>
    </Grid>
    <LandingPageButton name="ANY% NO ISG" path="anynoisg" />
    <LandingPageButton name="ANY% ALL KEYS" path="anyallkeys" />
    <LandingPageButton name="TAG ANYWHERE NLE" path="nletaganywhere" />
    <LandingPageButton name="TAG ANYWHERE 101%" path="101taganywhere" />
    <LandingPageButton name="GLITCHLESS ANY%" path="anyglitchless" />
    <LandingPageButton name="GLITCHLESS 101%" path="101glitchless" />
    <LandingPageButton name="100 GB MOVELESS" path="moveless100gb" />
  </Grid>
);
