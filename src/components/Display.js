import { connect } from 'react-redux';
import React, { useEffect, } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Media from './Media'
import { fetchFavourites } from '../redux';

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

function Display({ query, media, folders, fetchFavourites }) {

  useEffect(() => {
    fetchFavourites();
  });

  return (
    <Grid
      container
      flexgrow={1}
      spacing={3}
      direction="row"
      justify="center"
      alignContent="center"
    >
      {media.length === 0 ? (
        null
      ) : media.map((imgInState) => {
        return <Grid item xs={4} key={imgInState.id}>
          <Media 
            media={imgInState} 
            query={query} 
            saved={folders
              .find(folder => folder.images.find(img => img.id === imgInState.id) !== undefined) !== undefined} 
          />
        </Grid>
      })}
    </Grid>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    query: state.media.query,
    media: state.media.results,
    folders: state.folders.folders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavourites: () => {
      dispatch(fetchFavourites());
    }
  }
}

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Display));

export default DisplayContainer;
