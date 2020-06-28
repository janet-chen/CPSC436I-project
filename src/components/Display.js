import { connect } from 'react-redux';
import React, { Component } from 'react';
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
import CPopper from './Calendar/CPopper';
import CreateIcon from '@material-ui/icons/Create';

const styles = makeStyles => ({
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
    direction: 'row',
    // flexwrap: 'wrap'
  }
  // pos: {
  //   marginBottom: 12,
  // },
});

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        flexgrow={1}
        spacing={3}
        direction="row"
        justify="center"
        alignContent="center"
      >
        {this.props.results.map((imgInState, id) => {
          return <Grid item xs={4}>
            <Card className={classes.root} key={id}>
              <CardMedia
                component="img"
                height="240"
                image={imgInState.urls.small}
                title={this.props.query}
              />
              <CardActions>
                <Button size="small">{this.props.query}</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="write a note">
                  <CreateIcon />
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

const DisplayContainer = connect(mapStateToProps)(withStyles(styles)(Display));

export default DisplayContainer;
