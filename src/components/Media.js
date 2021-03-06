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

const findTitle = (tags) => {
//   console.log('TAGS: ' + JSON.stringify(tags));
  let tag = tags.find(tag => tag.type === "search");
  if (tag) {
    return tags.find(tag => tag.type === "search");
  } else {
    return {
      title: 'NO TAGS'
    };
  }
};

function Media({media, saved, toggleSaveMedia}) {
    const toggleSave = () => {
        toggleSaveMedia("default", media, !saved);
    }

    return (
        <Card key={media.id}>
            <CardMedia
                component="img"
                height="240"
                image={media.urls.small}
                title={media.description}
            />
            <CardContent>
            </CardContent>
            <CardActions>
                <Button size="small" >{findTitle(media.tags).title}</Button>
                <IconButton aria-label="add to favorites" onClick={toggleSave}>
                    <FavoriteIcon color={saved ? "secondary": "disabled"} />
                    
                </IconButton>
            </CardActions>
        </Card>
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleSaveMedia: (folder, destination, shouldSave) => {
            dispatch(toggleSaveMedia(folder, destination, shouldSave));
        },
    };
};

export default connect(null, mapDispatchToProps)(Media);
