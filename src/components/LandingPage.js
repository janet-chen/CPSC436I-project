import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
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

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    const classes = this.props;
    return (
      <Grid
        container
        flexgrow={1}
        spacing={3}
        direction="row"
        justify="center"
        alignContent="center"
      >
        {images.map((x) => {
          console.log(x.location)
          return <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                height="240"
                image={x.imgSrc}
                title={x.location}
              />
              <CardContent>
              </CardContent>
              <CardActions>
                <Button size="small">{x.location}</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        })}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.submittedSearch.currentSearch,
    results: state.submittedImages.savedImages
  };
};

const LandingPageContainer = connect(mapStateToProps)(withStyles(styles)(LandingPage));

export default LandingPageContainer;