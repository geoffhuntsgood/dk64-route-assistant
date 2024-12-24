import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { RouteList, SelectCheckboxes } from ".";
import trees from "../assets/img/trees.jpg";
import { styles } from "../utils/styles";
import { RouteSelection } from "./RouteSelection";

export const DKMain = () => {
  const [route, setRoute] = useState();
  const [checked, setChecked] = useState({
    n64OrVc: "n64" as "n64" | "vc",
    gbs: true,
    bps: false,
    crowns: false,
    fairies: false,
    medals: false,
    keys: false,
    darkMode: false
  });

  const background = {
    position: "fixed",
    top: "0",
    left: "0",
    backgroundImage: `url(${trees})`,
    height: "100vh",
    width: "100vw",
    overflowX: "hidden",
    overflowY: "auto",
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
  };

  const mainStyles = {
    subHeader: {
      fontFamily: "SixtyfourConvergence",
      backgrouncdColor: "#003500",
      fontSize: "1.5rem",
      display: "inline",
      padding: "10px"
    },
    grid: {
      marginTop: "100px"
    },
    subGrid: {
      marginTop: "30px"
    },
    lastGrid: {
      marginBottom: "30px"
    }
  };

  return (
    <Box sx={background}>
      {!route && (
        <>
          <Typography sx={styles.header}>DK64 Router</Typography>
          <Grid2 container spacing={1} sx={mainStyles.grid}>
            <Grid2 size={12}>
              <Typography sx={mainStyles.subHeader}>Show in Route</Typography>
            </Grid2>
          </Grid2>
          <SelectCheckboxes checked={checked} setChecked={setChecked} />
          <RouteSelection n64OrVc={checked.n64OrVc} setRoute={setRoute} />
        </>
      )}
      {route && (
        <RouteList dkRoute={route} setRoute={setRoute} checked={checked} />
      )}
    </Box>
  );
};
