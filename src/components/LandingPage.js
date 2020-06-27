import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import japanImg from '../img/japan.png';
import greeceImg from '../img/greece.png';
import romaniaImg from '../img/romania.png';
import nzImg from '../img/newzealand.png';
import Santorini from '../img/greece-santorini.png';
import Zakynthos from '../img/greece-zakynthos.png';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 'auto'
  },
  title: {
    fontSize: 32,
    color: 'grey',
    textAlign: 'center',
    padding: 15
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    direction: 'row'
  }
  // pos: {
  //   marginBottom: 12,
  // },
});

export default function LandingPage() {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>Where will your next journey take you?</h1> 
      <Grid 
    container
      flexGrow={1}
      spacing={3}
      direction="row"
      justify="center"
      alignContent="center"
      >
        <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                height="240"
                image={japanImg}
                title="Japan"
              />
              <CardActions>
                <Button size="small">Japan</Button>
              </CardActions>
            </Card>
        </Grid>

        <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                height="240"
                image={greeceImg}
                title="Greece"
              />
              <CardActions>
                <Button size="small">Greece</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                height="240"
                image={Santorini}
                title="Santorini"
              />
              <CardActions>
                <Button size="small">Santorini</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                height="240"
                image={Zakynthos}
                title="Zakynthos"
              />
              <CardActions>
                <Button size="small">Zakynthos</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                height="240"
                image={nzImg}
                title="New Zealand"
              />
              <CardActions>
                <Button size="small">New Zealand</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                height="240"
                image={romaniaImg}
                title="Romania"
              />
              <CardActions>
                <Button size="small">Romania</Button>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
      </div>
  );
}
