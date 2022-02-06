import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageComponent from './Message';
import { update } from '../../store/slices/message';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { selectedAsFavourite } from '../../store/slices/gallery';

export default function ImageListComponent({ items, action, notificationType, actionType, customMessage }) {

    const data = items;
    const dispatch = useDispatch();

    const hendleClick = (item) => {
        dispatch(update({ open: true, type: notificationType, message: `Picture ${item.id} was ${customMessage}` }));
        dispatch(action(item));
        if (actionType === 'adding') {
            dispatch(selectedAsFavourite(item));
        }
    }

    return (
        <div>
            <Grid container
                justifyContent="center"
                alignItems="center">
                {data.map((item) => (
                    <Grid item key={item.id} p={0.5} sx={{ maxWidth: 300 }}>
                        <ImageListItem>
                            <img
                                src={`${item.url}`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        aria-label={`info about ${item.title}`}
                                        onClick={() => hendleClick(item)}
                                        sx={{ color: item.liked ? 'red' : 'rgba(255, 255, 255, 0.54)' }}>
                                        <FavoriteIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    </Grid>
                ))}
            </Grid>
            <MessageComponent />
        </div >
    );
}