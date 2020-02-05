import React from 'react';
import {Button, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle}from '@material-ui/core';


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [taskText, setTaskText] = React.useState('')
  
  const handleClickOpen = () => {
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
    if(props.task){
      props.callback(taskText)
    }else{
      props.callback(props.ind)
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };


  const setText = (v) =>{
    setTaskText(v.target.value)
  }

  return (
    <div>
      {props.icon ? 
        <IconButton onClick={handleClickOpen}>
           {props.icon}
        </IconButton>
      : 
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.btn_name}
      </Button>
      }
      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby={props.title}
        fullWidth={true}
        maxWidth={'md'}>
        <DialogTitle id={props.title}>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.text}
          </DialogContentText>
            {props.task && (
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Add your Task to Do"
                type="text"
                fullWidth
                onChange={setText}
            />
            )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            {props.action}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
