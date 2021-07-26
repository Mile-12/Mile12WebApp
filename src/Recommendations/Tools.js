import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import CardActionArea from "@material-ui/core/CardActionArea";
import { blue, green, pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  green: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: green[500],
  },
}));

export default function Tools() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Scan for price prediction</Title>
      <CardActionArea>
      </CardActionArea>
      <CardActionArea>
      </CardActionArea>
      <CardActionArea>
      </CardActionArea>
    </React.Fragment>
  );
}
