import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import TotalCard from "./TotalCard";
import ExpensesTable from "./ExpensesTable";
import { drawerWidth } from "../AppBarAndDrawer/AppBarAndDrawer";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
import Tools from "./Tools";
import SimpleModal from "./Modal";
import { red } from "kleur";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appToolbar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 300,
  },
  balanceCard: {
    height: 200,
  },
  addexpense: {
    
  },
}));


export function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const balancePaper = clsx(classes.paper, classes.balanceCard);
  const addexpense = clsx(classes.paper, classes.addexpense);
  return (
    <>
      <Content>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} lg={12}>
            <Paper className={balancePaper}>
            <Grid className = {addexpense}>
              <TotalCard />
              <SimpleModal />
              </Grid>
            </Paper>
          </Grid>
          {/* Recent TotalCard */}
          {/* Chart */}
          <Grid item xs={12} md={8} lg={8}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <Paper className={fixedHeightPaper}>
              <Tools />
            </Paper>
          </Grid>
          {/* ExpensesTable */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ExpensesTable />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
        </Box>
      </Content>
    </>
  );
}
