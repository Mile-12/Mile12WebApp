import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { cyan, blueGrey, amber } from "@material-ui/core/colors";

const defaultTheme = {
  palette: {
    primary: cyan,
    secondary: blueGrey, //ss,
    //type: "dark",
  },
  typography: {
    fontFamily: "'Oxanium', cursive;",
  },
  status: {
    danger: "orange",
  },
};

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState({
    palette: {
      primary: cyan,
      secondary: blueGrey,
    },
  });
  const muiTheme = createMuiTheme({
    ...defaultTheme,
    ...currentTheme,
  });
  return [muiTheme, setCurrentTheme];
}
