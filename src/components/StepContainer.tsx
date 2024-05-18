import { Grid, Typography } from "@mui/material";
import { Step } from "./Step";

export const StepContainer = ({ step }: { step: Step }) => {
  const styles = {
    container: {
      border: "2px solid black",
      backgroundColor: step.color,
    },
    img: {
      marginTop: "auto",
      marginBottom: "auto",
      marginRight: "-7px"
    },
    header: {
      display: "grid",
      justifyContent: "center"
    },
    text: {
      padding: "10px",
      fontFamily: step.isHeader ? "LuckiestGuy" : "monospace",
      fontSize: step.isHeader ? "1.2rem" : "1rem",
      fontWeight: step.isHeader ? "regular" : "bold",
      color: step.isHeader ? "maroon" : "black",
      textShadow: step.isHeader ? "2px 2px goldenrod" : ""
    }
  };

  return (
    <Grid container sx={styles.container} columns={13}>
      {step.isHeader &&
        <Grid item xs={13} sx={styles.header}>
          <Typography sx={styles.text}>{step.text}</Typography>
        </Grid>
      }
      {!step.isHeader &&
        <>
          <Grid item xs={0.75}>
            {step.tagDirection &&
              <Typography sx={styles.text}>[{step.tagDirection}]</Typography>
            }
          </Grid>
          <Grid item xs={10.25}>
            <Typography sx={styles.text}>{step.text}</Typography>
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={0.5} sx={styles.img}>
            {step.gbCount && <img src="img/gb.png" width="20" height="30" />}
          </Grid>
          <Grid item xs={1}>
            {step.gbCount && <Typography sx={styles.text}>{step.gbCount}</Typography>}
          </Grid>
        </>
      }
    </Grid>
  );
};
