import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { fetchFavourites } from '../redux/'
import Media from './Media'



function SavedDisplay({ folders, fetchFavourites }) {
    
    useEffect(() => {
        fetchFavourites();
    }, []);
    
    return (
        <Grid
          container
          flexgrow={1}
          spacing={3}
          direction="row"
          justify="center"
          alignContent="center"
        >
          {folders.folders.length === 0 ? (
            null
          ) : folders.folders[0].images.map((imgInState) => {
            return <Grid item xs={4} key={imgInState.id}>
              <Media 
                media={imgInState} 
                saved={folders.folders
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
        folders: state.folders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFavourites: () => {
            dispatch(fetchFavourites());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedDisplay);;