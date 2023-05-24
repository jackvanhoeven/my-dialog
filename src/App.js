import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [selectedButton, setSelectedButton] = React.useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  const handleSubmitFeedback = () => {
    // Logic to submit feedback goes here
    setFeedbackSubmitted(true);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        hideBackdrop
        PaperProps={{
          sx: {
            maxWidth: '450px',
            backgroundColor: '#585858',
            color: 'white',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            '@media (max-width:350px,max-height:200px)': {
              top: 'auto',
              bottom: '20px',
              left: '50%',
              transform: 'translate(-50%, 0)',
            },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Thanks for using DoctorOnCall Pro!"}</DialogTitle>
        {feedbackSubmitted ? (
          <DialogContent>
            <DialogContentText>
              Thank you for your feedback!
            </DialogContentText>
          </DialogContent>
        ) : (selectedButton !== null && selectedButton >= 0 && selectedButton <= 9) ? (
          <DialogContent>
            <DialogContentText>
              How can we improve DoctorOnCall for you?
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              // label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px', // Adjust the value as per your preference
                height: '80px', 
              }}
              InputProps={{
                disableUnderline: true,
              }}
              multiline // Enable multiline
            />
            <DialogActions>
              <Button onClick={handleSubmitFeedback}>Submit Feedback</Button>
            </DialogActions>
          </DialogContent>
        ) : selectedButton === 10 ? (
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
        ) : (
          <DialogContent>
            <DialogContentText sx={{ color: 'white' }}>
              On a scale of 0-10, how likely are you to recommend our product/service to a friend or colleague?
            </DialogContentText>
            <DialogActions
              sx={{
                display: 'flex',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gridAutoFlow: 'column',
                gridGap: '5px',
                justifyContent: 'center',
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                <Button
                  sx={{
                    minWidth: '20px',
                    backgroundColor: 'white',
                    color: 'black',
                    textAlign: 'center',
                    borderRadius: '4px',
                  }}
                  key={number}
                  onClick={() => handleButtonClick(number)}
                >
                  {number}
                </Button>
              ))}
            </DialogActions>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
