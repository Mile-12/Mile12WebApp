import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {useState} from "react";
import { useHistory } from "react-router-dom";


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

export function SignUp({ loggedIn, logout, login }) {
  let history = useHistory();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setPhone] = useState('')
  const classes = useStyles();
  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("Registering")
    let body = {
      'username': username,
      "mobile": mobile,
      'password': password
    }
    console.log(body)
    axios.post('https://mile12db.azurewebsites.net/api/auth/signup',body ).then(response => {
    let id = response.data.id  
    if (id){ 
        console.log(id +"Created")          
      }
      else {
        console.log("Signup failes")
      }
      })
      history.push('/login')

  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
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
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Phone number"
                name="mobile"
                onChange = {handlePhoneChange}
                value={mobile}
                autoComplete="mobile"
                autoFocus
              />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="User Name"
                name="name"
                onChange = {handleUsernameChange}
                value={username}
                autoComplete="name"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange = {handlePasswordChange}
                value ={password}
                autoComplete="current-password"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmitClick}
                href="/welcome"
              >
                Sign Up
              </Button>
              <Box mt={5}>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
