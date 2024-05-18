import { Grid, Typography } from "@mui/material";
import { Step } from "./Step";

export const StepContainer = ({ step }: { step: Step }) => {
  const styles = {
    container: {
      border: "1px solid black",
      backgroundColor: step.color,
    },
    img: {
      float: "right",
      fontFamily: "monospace"
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
    <Grid container sx={styles.container}>
      {step.isHeader &&
        <Grid item xs={12} sx={styles.header}>
          <Typography sx={styles.text}>{step.text}</Typography>
        </Grid>
      }
      {!step.isHeader &&
        <Grid item xs={12}>
          <Typography sx={styles.text}>
            {step.tagDirection ? `[${step.tagDirection}] ` : ""}
            {step.text}
            {step.gbCount &&
              <>
                <Typography sx={styles.img}>
                  {step.gbCount}
                </Typography>
                <Typography sx={styles.img}>
                  <img src="img/gb.png" height={22} width={16.5} />
                </Typography>
              </>
            }
          </Typography>
        </Grid>

      }
    </Grid>
  );
};
