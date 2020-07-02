import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import { saveMedia } from '../redux/'


function Media({query, media, saved, saveMedia}) {
    const handleSave = () => {
        saveMedia(media);
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
                <IconButton aria-label="add to favorites" onClick={handleSave}>
                    <FavoriteIcon color={saved ? "action": "disabled"} />
                    
                </IconButton>
            </CardActions>
        </Card>
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        saveMedia: (destination) => {
            dispatch(saveMedia(destination));
        },
    };
};

export default connect(null, mapDispatchToProps)(Media);
