import { ListItem } from "@mui/material";
import { Step } from "../classes";
import { Color } from "../enums";

export const StepContainer = ({ step, progTotals }: { step: Step, progTotals: boolean }) => {
  const {
    color,
    text,
    tag,
    link,
    totals
  } = step;

  const styles = {
    header: {
      display: "grid",
      justifyContent: "center"
    },
    text: {
      border: "1px solid black",
      backgroundColor: color,
      padding: "10px",
      fontFamily: "monospace",
      fontSize: color === Color.Header ? "1.2rem" : "1rem",
      fontWeight: "bold",
      color: "black"
    }
  };

  const isHeader = () => {
    return color === Color.Header ? { ...styles.header, ...styles.text } : styles.text;
  }

  return (
    <>
      <ListItem sx={isHeader()}>
        {tag ? `[${tag}] ` : ""}
        {text}
        {link && <a target="_blank" rel="noopener noreferrer" href={link}>↗</a>}
      </ListItem>
      {progTotals && totals &&
        <ListItem sx={{ ...styles.header, ...styles.text }}>
          {"--- "}
          {totals.gbs && `GBs: ${totals.gbs} `}
          {totals.bps && `BPs: ${totals.bps} `}
          {totals.medals && `Medals: ${totals.medals} `}
          {totals.crowns && `Crowns: ${totals.crowns} `}
          {totals.fairies && `Fairies: ${totals.fairies} `}
          {totals.keys && `Keys: ${totals.keys} `}
          {totals.nCoin && "Nintendo Coin ✔ "}
          {totals.rCoin && "Rareware Coin ✔ "}
          ---
        </ListItem>
      }
    </>
  );
};
