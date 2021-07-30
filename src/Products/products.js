import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { authFetch } from '../auth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SimpleModal from './modal';


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
      authFetch("https://mile12db.azurewebsites.net/api/products").then(response => {
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
    <div className={classes.seeMore}>
      <h1>Available Products</h1>
      <SimpleModal align="right" />
      {values.map(row => (
    <div className={classes.root2}>
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
    </div>
          ))}


      </div>
    </React.Fragment>
  );
}
