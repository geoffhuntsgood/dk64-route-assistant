import { Box, Grid, List, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useKeypress from "react-use-keypress";
import { RouteSection, Step } from "../classes";
import { StepContainer } from "./StepContainer";

export const StepList = () => {
  const {
    routeInfo: {
      name,
      sections
    },
    progTotals
  } = useLocation().state;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectOptions, setSelectOptions] = useState([] as string[]);
  const [text, setText] = useState(name);

  useEffect(() => {
    setSelectOptions(sections.map((section: RouteSection) => section.name));
  }, [sections]);

  useEffect(() => {
    document.getElementById(selectOptions[selectedIndex])?.scrollIntoView();
  }, [selectOptions, selectedIndex]);

  useKeypress(["ArrowLeft", "ArrowRight"], (event: { key: string; }) => {
    if (event.key === "ArrowLeft" && selectedIndex > 0) {
      decreaseIndex();
    } else if (selectedIndex < selectOptions.length - 1) {
      increaseIndex();
    }
  });

  const decreaseIndex = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const increaseIndex = () => {
    if (selectedIndex < selectOptions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const getKey = (text: string) => {
    return `${text}-${(Math.random() + 1).toString(36).substring(7)}`;
  };

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
    link: {
      padding: "12px 0 0 5px"
    },
    header: {
      display: "grid",
      justifyContent: "center",
      fontFamily: "monospace",
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "black",
      backgroundColor: "silver",
      border: "1px solid black",
      ":focus, :hover": {
        backgroundColor: "white"
      }
    },
    buttons: {
      paddingTop: "10px",
      cursor: "pointer"
    },
    ul: {
      padding: "0"
    }
  };

  return (
    <Box sx={styles.box}>
      <Grid container>
        <Grid item xs={2}>
          <div className="header" style={{ ...styles.buttons }} onClick={decreaseIndex}>
            prev
          </div>
        </Grid>
        <Grid item xs={8} onMouseEnter={() => setText("<- BACK")} onMouseLeave={() => setText(name)}>
          <a href="/dk64router">
            <h1 className="header">{text}</h1>
          </a>
        </Grid>
        <Grid item xs={2}>
          <div className="header" style={{ ...styles.buttons }} onClick={increaseIndex}>
            next
          </div>
        </Grid>
      </Grid>
      <List
        subheader={<li />}
        sx={styles.contents}
      >
        {sections.map((section: RouteSection) => {
          return (
            <li key={section.name} id={section.name}>
              <ul style={{ ...styles.ul }}>
                <ListItemButton sx={styles.header} autoFocus={selectOptions[selectedIndex] === section.name}>
                  {section.name}
                </ListItemButton>
                {section.steps.map((step: Step) => (
                  <StepContainer step={step} key={getKey(step.text)} progTotals={progTotals} />
                ))}
              </ul>
            </li>
          );
        })}
      </List>
    </Box>
  );
};
