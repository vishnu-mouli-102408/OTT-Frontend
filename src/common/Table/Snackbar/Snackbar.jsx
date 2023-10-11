/* eslint-disable react/prop-types */
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
export default function DisplaySnackbar({ message, type, name }) {
  const [open, setOpen] = React.useState(false);
  console.log("snack bar called");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClick}>{name}</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
