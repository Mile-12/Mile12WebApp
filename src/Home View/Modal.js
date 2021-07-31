import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import moment from "moment";
import axios from "axios";

const currentDay = moment().format("YYYY-MM-DD");
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState('');
  const [location, setLocation] = useState('');
  const [amount, setAmount] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) =>{
    handleClose()
    //e.preventDefault()
    let body = {
      'Date' : currentDay,
      'Location' : location,
      'ProductName' : product,
      'Amount' : amount  
    }
    axios.post("https://mile12db.azurewebsites.net/api/expenses/C-1" , body).then(response => {
      return response
    }).then(response => {
      console.log(response)
      
    })
  }

  const handleOpen = () => {
    setOpen(true);
  };



  const handleProduct = (e) => {
    setProduct(e.target.value)
  };
  const handleLocation = (e) => {
    setLocation(e.target.value)
  };
  const handleAmount= (e) => {
    setAmount(e.target.value)
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add new expense</h2>
      <form>
          <label>Product Name (Ex. Titus)</label>
          <br/>
          <input 
          onChange = {handleProduct}
          type="text"></input>
          <br/>

          <label>Location </label>
          <br/>
          <input 
          onChange = {handleLocation}
          type="text"></input>
          <br/>

          <label>Amount</label>
          <br/>
          <input 
          onChange = {handleAmount}
          type="text"></input> 
          <br/> <br/>

          <input 
          type="submit" 
          value="Submit"
          /// this where on click you append the form to the table in the backend ... in stead of the cosole.log
          onClick={onSubmit}
          
          ></input>
      </form>
    
    </div>
  );

  return (
    <div>
      <Button 
        edge="end"
        variant="outlined"
        color="primary"
        type="button" 
        onClick={handleOpen}>
        Add Expense
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       {body}
      </Modal>
    </div>
  )
}

