import { connect } from 'react-redux';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Media from './Media'

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

function Display({ query, media, saved }) {
  // console.log(media)

  return media.length === 0 ? null : (
    <Grid
      container
      flexgrow={1}
      spacing={3}
      direction="row"
      justify="center"
      alignContent="center"
    >
      {media.map((imgInState) => {
        return <Grid item xs={4} key={imgInState.id}>
          <Media media={imgInState} query={query} saved={imgInState.id in saved}/>
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
    saved: {
      ...state.saved.results
  }
  };
};

const DisplayContainer = connect(mapStateToProps)(withStyles(styles)(Display));

export default DisplayContainer;
