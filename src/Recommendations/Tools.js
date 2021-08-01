import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import Grid from "@material-ui/core/Grid";
import { blue, green, pink } from "@material-ui/core/colors";
import moment from "moment";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Upload from "./uploadImg";
const currentDay = moment().format("YYYY-MM-DD");



const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  green: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: green[500],
  },
  input: {
    width: 300,
  }
}));

export default function Tools() {
const [name, setName] = useState('');
const [weight, setWeight] = useState('');
const [price, setPrice ] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  };
  const handleWeight = (e) => {
    setWeight(e.target.value)
  };
  
  const onSubmit = (e) =>{
    e.preventDefault()
    let body = {
      'date' : "2021-01-01",
      'main_commercial_species' : name,
      'size' : Number(weight),
    }
    axios.post("https://mile12db.azurewebsites.net/api/forecast/price" , body).then(response => {
      return response
    }).then(response => {

      console.log(response.data['price EURO'])
      setPrice(response.data['price EURO'])

      
    })
  }
  const classes = useStyles();
  console.log(name)
  return (
    <React.Fragment>
      <Title> Fish price Reccommendation </Title>
      <h5>Upload an image of a fish
       or input the type of fish to get a price recommendation</h5>
      <Grid>
      <form>
      <Upload />
      <TextField
        margin="normal"
        required
        fullWidth
        name="Name"
        label="Fish Type"
        onChange = {handleName}
        />
        <TextField
        margin="normal"
        required
        fullWidth
        name="weight"
        label="Weight"
        onChange = {handleWeight}
        />
        <br /><br /><br />
          <Button
          variant="contained"
          color="primary"
          /// this where on click you append the form to the table in the backend ... in stead of the cosole.log
          onClick={onSubmit}
          
          >Calculate</Button>
      </form>
      <br /><br /><br />
      <Title> Price prediction: N-{Math.round(price * 488.29)}</Title>
      </Grid>
    </React.Fragment>
  );
}
