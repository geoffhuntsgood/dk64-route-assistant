import { Grid2, Typography } from "@mui/material";
import * as n64Lists from "../lists/n64";
import * as vcLists from "../lists/vc";
import { MainButton } from "./MainButton";

export const RouteSelection = ({
  n64OrVc,
  setRoute
}: {
  n64OrVc: "n64" | "vc";
  setRoute: Function;
}) => {
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
    <>
      <Grid2 container spacing={1} sx={mainStyles.subGrid}>
        <Grid2 size={12}>
          <Typography sx={mainStyles.subHeader}>Any%</Typography>
        </Grid2>
        {n64OrVc === "n64" && (
          <>
            <MainButton route={n64Lists.any5KongWarps} setRoute={setRoute} />
            <MainButton route={n64Lists.any5KongWarpless} setRoute={setRoute} />
            <MainButton route={n64Lists.any1Kong2014} setRoute={setRoute} />
            <MainButton route={n64Lists.any1Kong2015} setRoute={setRoute} />
          </>
        )}
        {n64OrVc === "vc" && (
          <>
            <MainButton route={vcLists.any5Kong} setRoute={setRoute} />
            <MainButton route={vcLists.any1Kong2014} setRoute={setRoute} />
            <MainButton route={vcLists.any1Kong2015} setRoute={setRoute} />
          </>
        )}
      </Grid2>
      <Grid2 container spacing={1} sx={mainStyles.subGrid}>
        <Grid2 size={12}>
          <Typography sx={mainStyles.subHeader}>101%</Typography>
        </Grid2>
        {n64OrVc === "n64" && <></>}
        {n64OrVc === "vc" && (
          <>
            <MainButton route={vcLists.beginner101} setRoute={setRoute} />
            <MainButton route={vcLists.intermediate101} setRoute={setRoute} />
            <MainButton route={vcLists.expert101} setRoute={setRoute} />
          </>
        )}
      </Grid2>
      <Grid2 container spacing={1} sx={mainStyles.subGrid}>
        <Grid2 size={12}>
          <Typography sx={mainStyles.subHeader}>No Levels Early</Typography>
        </Grid2>
        {n64OrVc === "n64" && (
          <>
            <MainButton route={n64Lists.nleIntermediate} setRoute={setRoute} />
            <MainButton route={n64Lists.nle40bp} setRoute={setRoute} />
            <MainButton route={n64Lists.nle801} setRoute={setRoute} />
          </>
        )}
        {n64OrVc === "vc" && (
          <>
            <MainButton route={vcLists.nleIntermediate} setRoute={setRoute} />
            <MainButton route={vcLists.nle40bp} setRoute={setRoute} />
            <MainButton route={vcLists.nleHE} setRoute={setRoute} />
          </>
        )}
      </Grid2>
      <Grid2
        container
        spacing={1}
        sx={{ ...mainStyles.subGrid, ...mainStyles.lastGrid }}
      >
        <Grid2 size={12}>
          <Typography sx={mainStyles.subHeader}>Category Extensions</Typography>
        </Grid2>
        {n64OrVc === "n64" && <></>}
        {n64OrVc === "vc" && (
          <>
            <MainButton route={vcLists.anyNoISG} setRoute={setRoute} />
            <MainButton route={vcLists.anyAllKeys} setRoute={setRoute} />
            <MainButton
              route={vcLists.moveless}
              setRoute={setRoute}
            />
            <MainButton route={vcLists.ta101} setRoute={setRoute} />
            <MainButton route={vcLists.taNLE} setRoute={setRoute} />
            <MainButton route={vcLists.glitchlessAny} setRoute={setRoute} />
            <MainButton route={vcLists.glitchless101} setRoute={setRoute} />
          </>
        )}
      </Grid2>
    </>
  );
};
