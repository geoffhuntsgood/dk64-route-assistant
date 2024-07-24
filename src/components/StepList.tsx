import { Grid, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useKeypress from "react-use-keypress";
import { RouteSection, Step } from "../classes";
import { styles } from "../utils/styles";

export const StepList = () => {
  const {
    name,
    route
  }: {
    name: string,
    route: RouteSection[]
  } = useLocation().state;

  const [index, setIndex] = useState(0);
  const [headers, setHeaders] = useState([] as string[]);

  useEffect(() => {
    setHeaders(route.map((section: RouteSection) => section.name));
  }, [route]);

  useEffect(() => {
    document.getElementById(headers[index])?.scrollIntoView();
  }, [headers, index]);

  useKeypress(["ArrowLeft", "ArrowRight"], (event: { key: string; }) => {
    if (event.key === "ArrowLeft" && index > 0) {
      decreaseIndex();
    } else if (index < headers.length - 1) {
      increaseIndex();
    }
  });

  const decreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const increaseIndex = () => {
    if (index < headers.length - 1) {
      setIndex(index + 1);
    }
  };

  const getKey = (text: string) => {
    return `${text}-${Math.random()}`;
  };

  return (
    <Grid container>
      <Grid item xs={1}>
        <Typography sx={styles.header} style={{ cursor: "pointer" }} onClick={decreaseIndex}>{`<`}</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography sx={styles.header}>{name}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography sx={styles.header} style={{ cursor: "pointer" }} onClick={increaseIndex}>{`>`}</Typography>
      </Grid>

      <Grid item xs={11}>
        <List subheader={<li />} sx={styles.contents}>
          {route.map((section: RouteSection) => (
            <li key={getKey(section.name)}>
              <ul style={{ ...styles.item }}>
                <ListItem id={section.name} style={{ backgroundColor: "silver", border: "1px solid black", display: "grid", justifyContent: "center" }}>
                  {section.name}
                </ListItem>
                {section.steps.map((step: Step) => (
                  <ListItem key={getKey(step.text)} style={{ backgroundColor: step.color, border: "1px solid black" }}>
                    {step.tag}{step.text}
                    {step.gbs &&
                      <>
                        <img src="/img/gb.png" height="20" style={{ position: "absolute", right: "30px" }} />
                        <Typography sx={styles.item} style={{ position: "absolute", right: "5px" }}>
                          {step.gbs}
                        </Typography>
                      </>
                    }
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
