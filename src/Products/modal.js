import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import moment from "moment";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import { authFetch } from '../auth';

const currentDay = moment();
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
    position: 'relative',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState('');
  const [description, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleClose = () => {
    setOpen(false);
  };
  
  const onSubmit = (e) =>{
    handleClose()
    //e.preventDefault()
    let body = {
      'Name' : product,
      'Description' : description,
      'Price' : price,
      'Quantity' : quantity
    }
    const requestOption = {method: "POST", body: body}
    authFetch("https://mile12db.azurewebsites.net/api/products/C-1" , requestOption).then(response => {
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
  const handleDesc = (e) => {
    setDesc(e.target.value)
  };
  const handleQuantity= (e) => {
    setQuantity(e.target.value)
  };
  const handlePrice= (e) => {
    setPrice(e.target.value)
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

          <label>Description of product (optional)</label>
          <br/>
          <input 
          onChange = {handleDesc}
          type="text"></input>
          <br/>

          <label>Price</label>
          <br/>
          <input 
          onChange = {handlePrice}
          type="text"></input>
          <br/>

          <label>Quantity Available</label>
          <br/>
          <input 
          onChange = {handleQuantity}
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
    <div align ="right">
        <Button
        edge="end"
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpen}
        >
        Add a Product
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

