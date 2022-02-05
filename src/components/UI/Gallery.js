import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageComponent from './Message';
import { update } from '../../store/slices/message';
import { useDispatch } from 'react-redux';

export default function ImageListComponent({ items, action, notificationType, customMessage }) {

    const data = items;
    const dispatch = useDispatch();

    const hendleClick = (item) => {
        dispatch(update({ open: true, type: notificationType, message: `Picture ${item.id} was ${customMessage}` }));
        dispatch(action(item));
    }

    return (
        <div>
            <ImageList variant='quilted' cols={6} rowHeight={350} gap={5}>
                {data.map((item) => (
                    <ImageListItem key={item.id} >
                        <img
                            src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
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
                                    <FavoriteIcon color='danger' />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <MessageComponent />
        </div>
    );
}