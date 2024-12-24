import { Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useKeypress from "react-use-keypress";
import { CountImg } from ".";
import { Route, Step } from "../classes";
import { Checked } from "../types/Checked";
import { styles } from "../utils/styles";

export const RouteList = ({
  dkRoute,
  setRoute,
  checked
}: {
  dkRoute: Route;
  setRoute: Function;
  checked: Checked;
}) => {
  const [index, setIndex] = useState(0);
  const [headers, setHeaders] = useState([] as string[]);

  useEffect(() => {
    setHeaders(dkRoute.route.map((section) => section.name));
  }, [dkRoute.route]);

  useEffect(() => {
    document.getElementById(headers[index])?.scrollIntoView();
  }, [headers, index]);

  const decreaseIndex = () => {
    if (index >= 1) {
      setIndex(index - 1);
    }
  };

  const increaseIndex = () => {
    if (index < headers.length - 1) {
      setIndex(index + 1);
    }
  };

  useKeypress(["ArrowLeft", "ArrowRight"], (event: { key: string }) => {
    if (event.key === "ArrowLeft") {
      decreaseIndex();
    } else if (event.key === "ArrowRight") {
      increaseIndex();
    }
  });

  const listStyles = {
    header: {
      fontFamily: "SixtyfourConvergence",
      backgroundColor: "#003500",
      fontSize: "1.5rem"
    },
    title: {
      backgroundColor: "#003500",
      border: "1px solid black",
      fontFamily: "SixtyfourConvergence",
      fontSize: "1.5rem",
      padding: "5px"
    },
    grid: {
      width: "95vw",
      height: "85vh",
      marginTop: "10vh",
      marginLeft: "2vw",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "8px"
      },
      "&::-webkit-scrollbar-track": {
        background: "black"
      },
      "&::-webkit-scrollbar-thumb": {
        height: "50px",
        background: "maroon"
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "red"
      }
    },
    item: {
      fontFamily: "monospace",
      fontSize: "1.2rem",
      fontWeight: "bold",
      padding: "5px 10px",
      textAlign: "left"
    }
  };

  return (
    <>
      <Typography sx={{ ...styles.header, ...listStyles.header }}>
        <span
          style={{ float: "left", cursor: "pointer" }}
          onClick={() => decreaseIndex()}
        >{`<`}</span>
        <span style={{ cursor: "pointer" }} onClick={() => setRoute(undefined)}>
          {dkRoute.name}
        </span>
        <span
          style={{ float: "right", marginRight: "20px", cursor: "pointer" }}
          onClick={() => increaseIndex()}
        >{`>`}</span>
      </Typography>

      <Grid2 container sx={listStyles.grid}>
        {dkRoute.route.map((section) => (
          <Grid2 size={12} key={Math.random()}>
            <Typography id={section.name} sx={listStyles.title}>
              {section.name}
            </Typography>
            {section.steps.map((step: Step) => (
              <Typography
                key={Math.random()}
                sx={{
                  ...listStyles.item,
                  backgroundColor: checked.darkMode ? "rgb(10, 10, 10)" : step.color,
                  color: checked.darkMode ? step.color : "black",
                  border: checked.darkMode
                    ? `1px solid rgb(50, 50, 50)`
                    : "1px solid black"
                }}
              >
                {step.tag ? `[${step.tag}] ` : ""}
                {step.skew ? <i>Skew: {step.text}</i> : step.text}
                {step.link && (
                  <a target="_blank" rel="noopener noreferrer" href={step.link}>
                    **
                  </a>
                )}
                {((step.bps && checked.bps) ||
                  (step.crowns && checked.crowns) ||
                  (step.fairies && checked.fairies) ||
                  (step.gbs && checked.gbs) ||
                  (step.keys && checked.keys) ||
                  (step.medals && checked.medals)) && <CountImg step={step} />}
              </Typography>
            ))}
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
