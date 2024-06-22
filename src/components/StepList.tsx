import { Box, Grid, List, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useKeypress from "react-use-keypress";
import { RouteSection, Step } from "../classes";
import { StepContainer } from "./StepContainer";

export const StepList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectOptions, setSelectOptions] = useState([] as string[]);

  const {
    routeInfo: {
      name,
      sections
    },
    progTotals
  } = useLocation().state;

  useEffect(() => {
    setSelectOptions(sections.map((section: RouteSection) => section.name));
  }, []);

  useEffect(() => {
    document.getElementById(selectOptions[selectedIndex])?.scrollIntoView({
      block: "start"
    });
  }, [selectedIndex]);

  useKeypress(["ArrowLeft", "ArrowRight"], (event: { key: string; }) => {
    if (event.key === "ArrowLeft" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (selectedIndex < selectOptions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  });

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
        backgroundColor: "white",
      }
    },
    ul: {
      padding: "0"
    }
  };

  return (
    <Box sx={styles.box}>
      <Grid container>
        <Grid item xs={1} sx={styles.link}>
          <a href="/dk64router" className="header">BACK</a>
        </Grid>
        <Grid item xs={10}>
          <h1 className="header">{name}</h1>
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
