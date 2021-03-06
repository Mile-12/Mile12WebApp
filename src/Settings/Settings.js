import React from "react";
import Typography from "@material-ui/core/Typography";
import PalettePicker from "../Theme/PalettePicker";

export default function ({ currentTheme, setCurrentTheme }) {
  return (
    <div>
      <Typography variant="h3"> Settings </Typography>
      <Typography variant="h6"> Theme Color </Typography>
      <PalettePicker
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      </div>
  );
}
