import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { CallMissedSharp } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "0px",
  },
  paper: {
      width: 350,
  }
}));


export function Landing() {

    const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid lg={12} container justify="center" className={classes.image}>
        <Paper className={classes.paper}>
            
            
        </Paper>
      

      </Grid>
    </Grid>
  );
}

