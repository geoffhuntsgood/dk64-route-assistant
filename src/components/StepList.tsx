import { Grid, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useKeypress from "react-use-keypress";
import { RouteSection, Step } from "../classes";
import { styles } from "../utils/styles";
import gb from "/public/img/gb.png";

export const StepList = ({ name, route }: { name: string, route: RouteSection[] }) => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [headers, setHeaders] = useState([] as string[]);
  const [title, setTitle] = useState(name);

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

  const getItemColor = (color: string | string[]) => {
    let style = {
      border: "1px solid black",
      backgroundImage: "",
      backgroundColor: ""
    };

    if (Array.isArray(color)) {
      let gradString = "linear-gradient(to right, ";
      color.forEach((c: string) => {
        gradString += `${c}, `;
      });
      style.backgroundImage = `${gradString.substring(0, gradString.length - 2)})`;
    } else {
      style.backgroundColor = color;
    }
    
    return style;
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
        <Typography sx={styles.header} style={{ cursor: "pointer" }} onClick={() => navigate("/")} onMouseEnter={() => setTitle("BACK")} onMouseLeave={() => setTitle(name)}>
          {title}
        </Typography>
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
                  <ListItem key={getKey(step.text)} style={getItemColor(step.color)}>
                    {step.tag}{step.isSkewed ? <i>Skew: {step.text}</i> : step.text}
                    {step.link &&
                      <a target="_blank" rel="noopener noreferrer" href={step.link}>**</a>
                    }
                    {step.gbs &&
                      <>
                        <img src={gb} height="20" style={{ position: "absolute", right: "30px" }} />
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
