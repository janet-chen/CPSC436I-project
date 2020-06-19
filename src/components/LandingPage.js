import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import japanImg from '../img/japan.png';
import greeceImg from '../img/greece.png';
import romaniaImg from '../img/romania.png';
import nzImg from '../img/newzealand.png';
import Santorini from '../img/greece-santorini.png';
import Zakynthos from '../img/greece-zakynthos.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 'auto'
  },
  title: {
    fontSize: 14,
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
              <CardContent>
              </CardContent>
              <CardActions>
                <Button size="small">Japan</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
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
              <CardContent>
              </CardContent>
              <CardActions>
                <Button size="small">Greece</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
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
              <CardContent>
              </CardContent>
              <CardActions>
                <Button size="small">Santorini</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
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
              <CardContent>
              </CardContent>
              <CardActions>
                <Button size="small">Zakynthos</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
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
              <CardContent>
              </CardContent>
              <CardActions>
                <Button size="small">New Zealand</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
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
              <CardContent>
              </CardContent>
              <CardActions>
                <Button size="small">Romania</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
  );
}
