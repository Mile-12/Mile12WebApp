import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "0px",
  },
  paper: {
    margin: theme.spacing(0, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 50,
  },
  title: {
    margin: theme.spacing(5, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export function Welcome() {

    const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container justify="center" className={classes.image}>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          direction="row"
          elevation={6}
          square
        >
            <Grid className={classes.title}>
            <Typography component="h1" variant="h5">
              Welcome, Ireti!
            </Typography>
            </Grid>
          <Grid className={classes.paper}>
              <Button 
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                href="/name"
                onClick=""
                
              >
                <br />
                Register A Cooperative
                <br />
                <br />
              </Button>
              <br/>
              <Button
                disabled
                xs={12} 
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                href="/home"
                onClick=""
                
              >
                <br />
                Join A Cooperative
                <br />
                <br />
              </Button>
              <br/>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                href="/Products"
                onClick=""
                
              >
                <br />
                Products
                <br />
                <br />
              </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

