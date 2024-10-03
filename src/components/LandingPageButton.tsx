import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import { styles } from "../utils/styles";

export const LandingPageButton = ({ name, path, doc }: { name: string, path: string, doc?: string }) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Grid container>
          <Grid item xs={doc ? 10 : 12}>
            <Button sx={styles.button} variant="contained" onClick={() => navigate(`/route/${path}`)}>
              {name}
            </Button>
          </Grid>
          {doc &&
            <Grid item xs={2}>
              <a target="_blank" rel="noopener noreferrer" href={doc}>
                <Button sx={styles.button} variant="contained">
                  DOC
                </Button>
              </a>
            </Grid>
          }
        </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </>
  );
};
