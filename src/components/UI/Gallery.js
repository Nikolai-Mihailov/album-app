import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { add } from '../../store/slices/favourites';
import { useDispatch } from 'react-redux';
export default function ImageListComponent({ items }) {

    const data = items;
    const dispatch = useDispatch();

    return (
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
                                onClick={() => dispatch(add(item))}
                                sx={{ color: item.liked ? 'red' : 'rgba(255, 255, 255, 0.54)' }}>
                                <FavoriteIcon color='danger' />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}