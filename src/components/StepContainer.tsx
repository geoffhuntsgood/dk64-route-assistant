import { ListItem } from "@mui/material";
import { Step } from "../classes";
import { Collectible, Color } from "../enums";
import { CollectibleLabel } from "./CollectibleLabel";

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
  };

  return (
    <>
      <ListItem sx={isHeader()}>
        <div style={{ width: "100%" }}>
          {tag ? `[${tag}] ` : ""}
          {text}
          {link &&
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <div style={{ float: "right" }} className="header">vid</div>
            </a>
          }
          {progTotals && totals &&
            <>
              {totals.gbs && <CollectibleLabel type={Collectible.GB} value={totals.gbs} />}
              {totals.bps && <CollectibleLabel type={Collectible.BP} value={totals.bps} />}
              {totals.medals && <CollectibleLabel type={Collectible.Medal} value={totals.medals} />}
              {totals.crowns && <CollectibleLabel type={Collectible.Crown} value={totals.crowns} />}
              {totals.fairies && <CollectibleLabel type={Collectible.Fairy} value={totals.fairies} />}
              {totals.keys && <CollectibleLabel type={Collectible.Key} value={totals.keys} />}
              {totals.nCoin && <CollectibleLabel type={Collectible.NCoin} value={0} />}
              {totals.rCoin && <CollectibleLabel type={Collectible.RCoin} value={0} />}
            </>
          }
        </div>
      </ListItem>
    </>
  );
};
