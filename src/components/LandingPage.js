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

const images = [
  {
    location: 'Japan',
    imgSrc: japanImg
  },
  {
    location: 'Greece',
    imgSrc: greeceImg
  },
  {
    location: 'Romania',
    imgSrc: romaniaImg
  },
  {
    location: 'Santorini',
    imgSrc: Santorini
  },
  {
    location: 'Zakynthos',
    imgSrc: Zakynthos
  },
  {
    location: 'New Zealand',
    imgSrc: nzImg
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: 'auto'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    padding: 15,
    color: 'gray'
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
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>Where will your next journey take you?</h1>
      <Grid
        container
        flexgrow={1}
        spacing={3}
        direction="row"
        justify="center"
        alignContent="center"
      >
        <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="iframe"
                height="237"
                src='https://www.youtube.com/embed/5NWABrC0kOI'
                title={"video"}
              />
              <CardActions>
                <Button size="small">Magical Tearoom ASMR Ambience</Button>
              </CardActions>
              </Card> 
          </Grid>
        {images.map((image) => {
          // console.log(image.location)
          return <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                height="240"
                image={image.imgSrc}
                title={image.location}
              />
              <CardActions>
                <Button size="small">{image.location}</Button>
              </CardActions>
            </Card>
          </Grid>
        })}
      </Grid>
    </div>
  );
};
