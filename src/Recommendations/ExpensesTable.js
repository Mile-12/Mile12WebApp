import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';


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
  //const rows = Object.values(data);
  return (
    <React.Fragment>
      <Title>List of Daily Reccomendations</Title>
      <div>
        <h4>...coming soon...</h4>
      </div>
      <div className={classes.seeMore}>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more recommendations
        </Link>
      </div>
    </React.Fragment>
  );
}
