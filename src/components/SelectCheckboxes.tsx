import {
  Checkbox,
  FormControlLabel,
  Grid2,
  Radio,
  Typography
} from "@mui/material";
import bc from "../assets/img/bc.png";
import bp from "../assets/img/bp.png";
import fairy from "../assets/img/fairy.png";
import gb from "../assets/img/gb.png";
import key from "../assets/img/key.png";
import medal from "../assets/img/medal.png";
import { Checked } from "../types/Checked";

export const SelectCheckboxes = ({
  checked,
  setChecked
}: {
  checked: Checked;
  setChecked: Function;
}) => {
  const handleChange = (changed: object) => {
    setChecked({
      ...checked,
      ...changed
    });
  };

  const checkboxStyles = {
    form: {
      margin: "5px",
      padding: "10px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      "&:hover": {
        backgroundColor: "darkgreen"
      },
      borderRadius: "5px"
    },
    label: {
      fontFamily: "SixtyfourConvergence"
    },
    checkbox: {
      color: "darkred",
      "&.Mui-checked": {
        color: "darkred"
      }
    }
  };

  return (
    <Grid2 container spacing={1}>
      <Grid2 size={1.5}></Grid2>
      <Grid2 size={3}>
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<img src={gb} height={40} />}
          control={
            <Checkbox
              sx={checkboxStyles.checkbox}
              checked={checked.gbs}
              onChange={(event) => handleChange({ gbs: event.target.checked })}
            />
          }
        />
      </Grid2>
      <Grid2 size={3}>
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<img src={bp} height={40} />}
          control={
            <Checkbox
              sx={checkboxStyles.checkbox}
              checked={checked.bps}
              onChange={(event) => handleChange({ bps: event.target.checked })}
            />
          }
        />
      </Grid2>
      <Grid2 size={3}>
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<img src={bc} height={40} />}
          control={
            <Checkbox
              sx={checkboxStyles.checkbox}
              checked={checked.crowns}
              onChange={(event) =>
                handleChange({ crowns: event.target.checked })
              }
            />
          }
        />
      </Grid2>
      <Grid2 size={1.5}></Grid2>
      <Grid2 size={1.5}></Grid2>
      <Grid2 size={3}>
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<img src={fairy} height={40} />}
          control={
            <Checkbox
              sx={checkboxStyles.checkbox}
              checked={checked.fairies}
              onChange={(event) =>
                handleChange({ fairies: event.target.checked })
              }
            />
          }
        />
      </Grid2>
      <Grid2 size={3}>
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<img src={medal} height={40} />}
          control={
            <Checkbox
              sx={checkboxStyles.checkbox}
              checked={checked.medals}
              onChange={(event) =>
                handleChange({ medals: event.target.checked })
              }
            />
          }
        />
      </Grid2>
      <Grid2 size={3}>
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<img src={key} height={40} />}
          control={
            <Checkbox
              sx={checkboxStyles.checkbox}
              checked={checked.keys}
              onChange={(event) => handleChange({ keys: event.target.checked })}
            />
          }
        />
      </Grid2>
      <Grid2 size={1.5}></Grid2>
      <Grid2 size={2}></Grid2>
      <Grid2 size={4}>
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<Typography sx={checkboxStyles.label}>Dark Mode</Typography>}
          control={
            <Checkbox
              sx={checkboxStyles.checkbox}
              checked={checked.darkMode}
              onChange={(event) =>
                handleChange({ darkMode: event.target.checked })
              }
            />
          }
        />
      </Grid2>
      <Grid2 size={4}>
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<Typography sx={checkboxStyles.label}>N64</Typography>}
          control={
            <Radio
              sx={checkboxStyles.checkbox}
              checked={checked.n64OrVc === "n64"}
              onChange={() => handleChange({ n64OrVc: "n64" })}
            />
          }
        />
        <FormControlLabel
          sx={checkboxStyles.form}
          label={<Typography sx={checkboxStyles.label}>VC</Typography>}
          control={
            <Radio
              sx={checkboxStyles.checkbox}
              checked={checked.n64OrVc === "vc"}
              onChange={() => handleChange({ n64OrVc: "vc" })}
            />
          }
        />
      </Grid2>
    </Grid2>
  );
};
