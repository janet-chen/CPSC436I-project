import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PublicIcon from '@material-ui/icons/Public';
import { connect } from 'react-redux';
import { addTrip } from '../../redux/trips/tripsActions'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let title = React.createRef();
let days = React.createRef();

function handleSubmit (event) {
  event.preventDefault();
  console.log(title.value);
  console.log(days.value);
}

function NewTripForm() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PublicIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          New Trip
        </Typography>
        <form className={classes.form} noValidate onSubmit={(event)=>handleSubmit(event)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                ref={title}
                variant="outlined"
                required
                fullWidth
                id="tripName"
                label="Trip Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                ref={days}
                id="tripDays"
                label="Days"
                type="number"
                variant="outlined"
                defaultValue="1"
                required
                fullWidth
                InputProps={{
                  inputProps: {
                    max: 10, min: 1
                  }
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTrip: (tripData) => {
            dispatch(addTrip(tripData));
        }
    }
};

export default connect(null, mapDispatchToProps)(NewTripForm);
