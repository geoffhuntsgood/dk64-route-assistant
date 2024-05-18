import { Button, Grid } from "@mui/material";
import JsFileDownloader from "js-file-downloader";
import { Dispatch, SetStateAction } from "react";
import { Route } from "../enums";

export const LinkRow = ({
  setRoute,
  title,
  fileName,
  refUrl,
}: {
  setRoute: Dispatch<SetStateAction<Route>>,
  title: Route,
  fileName: string,
  refUrl: string
}
) => {
  const download = () => {
    new JsFileDownloader({
      url: `public/splits/${fileName}`
    });
  };

  const styles = {
    button: {
      fontFamily: "LuckiestGuy",
      fontSize: "1.2rem",
      color: "maroon",
      backgroundColor: "goldenrod",
      width: "100%",
      border: "3px solid maroon",
      "&:hover": {
        backgroundColor: "gold"
      },
      a: {
        textDecoration: "none",
        "&:visited, &:focus": {
          color: "maroon"
        }
      }
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Button sx={styles.button} variant="contained" onClick={() => setRoute(title)}>
          {title}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button sx={styles.button} variant="contained" onClick={download}>
          SPLIT
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button sx={styles.button} variant="contained">
          <a target="_blank" rel="noopener noreferrer" href={refUrl}>REF DOC</a>
        </Button>
      </Grid>
    </Grid>
  );
};
