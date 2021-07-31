import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { authFetch } from './auth';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    width: "100%",
    paddingTop: "0px",
  },
  paper: {
    margin: theme.spacing(8, 8),
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
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
export function Name() {
let history = useHistory();
  const classes = useStyles();
  const [name, setname] = useState('')

  const onSubmit = (e) =>{
      console.log("Inside Submit")
      
    
        console.log("Key available")
      let body = {
        'Name' : name,
        'Coopid': 567,
      }
      //var requestOption = {method:'POST', body:body,headers:{Authorization: 'Bearer ' + key.token}}
      let requestOption = {method:'POST',body:JSON.stringify(body),headers: {'Content-Type':'application/json'}}

      //https://mile12db.azurewebsites.net
      authFetch("https://mile12db.azurewebsites.net/api/coop",requestOption ).then(response => {
        return response.json()
      }).then(response => {
        console.log(response)
        history.push('/members')
      })
      
    } 
    const handleName = (e) => {
        setname(e.target.value)
        }
    console.log(name)
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
          <Grid className={classes.paper}>
              <br /><br /><br />
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Name Your Cooperative"
                name="email"
                value={name}
                onChange = {handleName}
                autoComplete="email"
                autoFocus
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
                
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

