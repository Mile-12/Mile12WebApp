import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { authFetch } from '../auth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SimpleModal from './modal';
import Grid from '@material-ui/core/Grid';


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
    marginLeft: 300,
    marginRight: 100,
  },
  root: {
    minWidth: 275,
    marginLeft: 0,
  },
  root2: {
    minWidth: 275,
    paddingBottom: 20,
    paddingTop: 20,

  },
  bullet: {
    display: 'flex',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Products() {
  
  const [values, setValue] = useState([])
    useEffect(() => {
      authFetch("https://mile12db.azurewebsites.net/api/products/C-1").then(response => {
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
    <Grid container spacing = {0}>
      <h1>Available Products</h1>
    <Grid item xs={12} md={7} lg={11}>
      <SimpleModal />
      </Grid>
      <Grid item xs={12} md={7} lg={12}>
      {values.map(row => (
        <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography variant="h5" component="h2">
                {row.ProductName}
                </Typography>
                <Typography variant="body2" component="p">
                {row.Description}
                </Typography>
                <br /><br /><br />
                <Typography className={classes.pos} color="textSecondary">
                Price: ${row.Price}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Quantity Available: {row.QuantityAvailable}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {row.Createby}
                </Typography>

        </CardContent>
        </Card>
          ))}
        </Grid>



      </Grid>
    </React.Fragment>
  );
}
