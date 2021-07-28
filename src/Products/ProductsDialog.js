import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/productsSlice";
import { useDispatch } from "react-redux";
import { nextID } from "../ReduxTable/productsSlice";

export default function ProductsDialog({ data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const defaultImg = data && data.img;
  const defaultName = data && data.name;
  // Existing ID or random ID
  const id = data && data.id;

  const [img, setImg] = React.useState(defaultImg);
  const [productname, setProductName] = React.useState(defaultName);
  const [totalquantity, setTotalQuantity] = React.useState(defaultName);
  const [amount, setAmount] = React.useState(defaultName);
  const [subquantity, setSubQuantity] = React.useState(defaultName);

  const handleClickOpen = () => {
    setOpen(true);
    setTotalQuantity(defaultName)
    setProductName(defaultName);
    setAmount(defaultName);
    setSubQuantity(defaultName);
    setImg(defaultImg);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const action = data ? update : add;
    dispatch(action({ productname, id: id || nextID(), img, totalquantity, amount, subquantity }));
    onSave && onSave();
    handleClose();
  };

  return (
    <>
      {render(handleClickOpen)}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {data ? "Edit" : "Add"} New Product{" "}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="productname"
            label="Product"
            fullWidth
            value={productname}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Total Quantity"
            fullWidth
            value={totalquantity}
            onChange={(e) => {
              setTotalQuantity(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Amount"
            fullWidth
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Sub Quantity"
            fullWidth
            value={subquantity}
            onChange={(e) => {
              setSubQuantity(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
