import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";

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

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add new expense</h2>
      <form>
          <label>Product Name (Ex. Titus)</label>
          <br/>
          <input type="text"></input>
          <br/>

          <label>Location </label>
          <br/>
          <input type="text"></input>
          <br/>

          <label>Amount</label>
          <br/>
          <input type="text"></input> 
          <br/> <br/>

          <input 
          type="submit" 
          value="Submit"
          /// this where on click you append the form to the table in the backend ... in stead of the cosole.log
          onCLick={console.log("you clilcked me")}
          
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

