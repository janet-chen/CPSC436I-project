import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
// import CPopper from './Calendar/CPopper';

import { fetchMedia } from '../redux'

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

function Display({query, media}) {
  // useEffect(() => {
  //   console.log("fetching media: " + query)
  //   if (query !== '')
  //     fetchMedia(query);
  // }, []);

  // const { classes } = this.props;

  return media.media.length === 0 ? null : (
    <Grid
      container
      flexgrow={1}
      spacing={3}
      direction="row"
      justify="center"
      alignContent="center"
    >
      {media.media.map((imgInState, id) => {
        return <Grid item xs={4}>
          {/* <Card className={classes.root} key={id}> */}
          <Card key={id}>
            <CardMedia
              component="img"
              height="240"
              image={imgInState.urls.small}
              title={query}
            />
            <CardContent>
            </CardContent>
            <CardActions>
              <Button size="small">{query}</Button>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      })}
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    query: state.query.destination,
    media: state.media
  };
};

const DisplayContainer = connect(mapStateToProps)(withStyles(styles)(Display));

export default DisplayContainer;
