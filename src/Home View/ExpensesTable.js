import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Data2 from './data.json';
import axios from 'axios';
import { authFetch } from '../auth';



const api = axios.create({
  baseURL: ``
})

var Amount = 0

export function getAmount() {
  return(Amount)
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ExpensesTable() {
  
  const [values, setValue] = useState([])
    useEffect(() => {
      authFetch("https://mile12db.azurewebsites.net/api/expenses/C-1").then(response => {
        return response.json()
      }).then(response => {
          console.log(response)
          setValue(response)
          //setMessage(" User name" + response[0].username)
  
        }
      )
    }, [])

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Product</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map(row => (
            <React.Fragment>
            <script>
              {Amount += Number(row.Amount)}</script>
            <TableRow key={row.id}>
              <TableCell>{row.Date} </TableCell>
              <TableCell>{row.Location}</TableCell>
              <TableCell>{row.ProductName}</TableCell>
              <TableCell align="right">
                {row.Amount}
              </TableCell>
            </TableRow>
            </React.Fragment>
          ))}
            <TableRow>
              <TableCell>{Amount}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      
      <div className={classes.seeMore}>
        <Link color="primary" href="/home" onClick={console.log("debug")}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
