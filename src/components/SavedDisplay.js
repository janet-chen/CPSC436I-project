import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { fetchFavourites } from '../redux/'



function SavedDisplay({ folders, fetchFavourites }) {
    
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
            {folders.folders.map((folder) => {
                const image = folder.images[0]; // use first image in folder as representative for folder
                return (
                    <Grid item xs={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                height="240"
                                image={image.urls.small}
                                title={image.description}
                            />
                            <CardActions>
                                <Link to={`/folder/${folder.name}`} style={{ textDecoration: 'none' }} >
                                    <Button size="small" >{folder.name}</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                )
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