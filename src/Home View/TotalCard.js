import React, { useContext, useState, useEffect} from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { DataContext } from "../Providers/DataProvider";
import Title from "./Title";
import { currentDay } from "../Providers/DataProvider";
import { format } from "date-fns";
import SimpleModal from "./Modal";
import {Amount} from "./ExpensesTable";
import { authFetch } from '../auth';

function floor(i) { 
  Number(i);
}
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  paper: {
    display: "flex"

  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  balance: {
    display: "flex",
  },
  balanceItem: {
    marginRight: "40px",
  },
 
});
export let deposits = 0;
export let withdrawls = 0;

export default function Deposits() {
  const classes = useStyles();
  //const { data } = useContext(Amount);
  //console.log(data)


  const [values, setValue] = useState([])
  useEffect(() => {

    authFetch("https://mile12db.azurewebsites.net/api/expenses/C-1").then(response => {
      return response.json()
    }).then(response => {

      for (var i = 0; i < response.length; i++) {
        //console.log( "the" +response[i].Amount)
        setValue(oldArray => [...oldArray, response[(i)].Amount])}
      }
        )

  }, [])
  console.log("here" + values)
  deposits = 0
  withdrawls =0
  for (let i = 0; i < values.length; i++) {
    if (Number(values[i]) > 0) deposits += Number(values[i]);
    if (Number(values[i]) < 0) withdrawls += Number(values[i]);
    console.log(Number(values[i]))

}

  return (
    <React.Fragment className = {classes.paper}>
      <div className={classes.toolbar}>
        <Title>Balance</Title>
       
      <div>
    </div>
      </div>
      <div className={classes.balance}>
        <div className={classes.balanceItem}>
          <Typography component="p" variant="h3">
            ${deposits + withdrawls}
          </Typography>
        </div>
        <div className={classes.balanceItem}>
          <Typography component="p" variant="h5">
          ${withdrawls}
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            Withdrawls
          </Typography>
        </div>
        <div className={classes.balanceItem}>
          <Typography component="p" variant="h5">
          ${deposits}
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            Deposits
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}
