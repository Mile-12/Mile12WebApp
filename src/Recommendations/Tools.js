import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import CardActionArea from "@material-ui/core/CardActionArea";
import { blue, green, pink } from "@material-ui/core/colors";
import moment from "moment";
import axios from "axios";

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
      'size' : weight,
    }
    axios.post("https://mile12db.azurewebsites.net/api/forecast/price" , body).then(response => {
      return response
    }).then(response => {

      console.log(response.data['price EURO'])
      setPrice(response.data['price EURO'])

      
    })
  }
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Scan for price prediction</Title>
      <form>
          <label>Fish Name</label>
          <br/>
          <input 
          onChange = {handleName}
          type="text"></input>
          <br/>

          <label>Weight</label>
          <br/>
          <input 
          onChange = {handleWeight}
          type="text"></input>
          <br/>

          <input 
          type="submit" 
          value="Submit"
          /// this where on click you append the form to the table in the backend ... in stead of the cosole.log
          onClick={onSubmit}
          
          ></input>
      </form>
      <CardActionArea>
      </CardActionArea>
      <CardActionArea>
      </CardActionArea>
      <CardActionArea>
      </CardActionArea>
      <h1> Price prediction: N{Math.round(price * 488.29)}</h1>
    </React.Fragment>
  );
}
