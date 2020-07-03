import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import { toggleSaveMedia } from '../redux/'


function Media({query, media, saved, toggleSaveMedia}) {
    const toggleSave = () => {
        toggleSaveMedia(media, !saved);
    }

    return (
        <Card key={media.id}>
            <CardMedia
                component="img"
                height="240"
                image={media.urls.small}
                title={query}
            />
            <CardContent>
            </CardContent>
            <CardActions>
                <Button size="small" >{query}</Button>
                <IconButton aria-label="add to favorites" onClick={toggleSave}>
                    <FavoriteIcon color={saved ? "secondary": "disabled"} />
                    
                </IconButton>
            </CardActions>
        </Card>
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleSaveMedia: (destination, shouldSave) => {
            dispatch(toggleSaveMedia(destination, shouldSave));
        },
    };
};

export default connect(null, mapDispatchToProps)(Media);
