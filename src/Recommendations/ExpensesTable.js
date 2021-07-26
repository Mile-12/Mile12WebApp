import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { DataContext } from '../Providers/DataProvider';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ExpensesTable() {
  const classes = useStyles();
  const { data } = useContext(DataContext);
  const rows = Object.values(data);
  return (
    <React.Fragment>
      <Title>List of Daily Reccomendations</Title>
      <div>
        <Table size="small">
          <TableRow>
          This is where the recommendations will go ... we can use a json or something??
          </TableRow>
          <br/>
          <TableRow>
          This is where the recommendations will go ... we can use a json or something??
          </TableRow>

        </Table>
      </div>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more recommendations
        </Link>
      </div>
    </React.Fragment>
  );
}
