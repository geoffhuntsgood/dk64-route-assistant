import { Grid, Typography } from "@mui/material";
import { Step } from "../classes";
import { Color } from "../enums";

export const StepContainer = ({ step }: { step: Step }) => {
  const isHeader = step.color === Color.Header;

  const styles = {
    container: {
      border: "1px solid black",
      backgroundColor: step.color,
    },
    header: {
      display: "grid",
      justifyContent: "center"
    },
    text: {
      padding: "10px",
      fontFamily: "monospace",
      fontSize: isHeader ? "1.2rem" : "1rem",
      fontWeight: "bold",
      color: isHeader ? "#660000" : "black",
      textShadow: isHeader ? "2px 2px goldenrod" : ""
    }
  };

  return (
    <Grid container sx={styles.container}>
      {isHeader &&
        <Grid item xs={12} sx={styles.header}>
          <Typography sx={styles.text}>{step.text}</Typography>
        </Grid>
      }
      {!isHeader &&
        <Grid item xs={12}>
          <Typography sx={styles.text}>
            {step.tag ? `[${step.tag}] ` : ""}
            {step.text}
            {step.gbCount && <span style={{ float: "right" }}>{step.gbCount}</span>}
            {step.gbCount &&
              <span style={{ float: "right" }}>
                <img src="img/gb.png" height={22} width={16.5} />
              </span>
            }
            {step.link &&
              <span style={{ float: "right" }}>
                <a target="_blank" rel="noopener noreferrer" href={step.link}>
                  🔗
                </a>
              </span>
            }
          </Typography>
        </Grid>

      }
    </Grid>
  );
};
