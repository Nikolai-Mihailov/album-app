import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAlbums } from '../../store/slices/actions/fetchAlbums';
import { Grid, Container } from '@mui/material'

import CardComponent from '../UI/Card';


function AlbumsComponent() {

    const map = new Map();
    const result = [];
    const data = useSelector(state => state.albums.items);
    const dispatch = useDispatch();

    // Get the unique albums ID whit thumbnailUrl
    data.forEach(item => {
        if (!map.has(item.albumId)) {

            map.set(item.albumId, true)
            result.push({
                albumId: item.albumId,
                thumbnailUrl: item.thumbnailUrl
            })
        }
    });

    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    const albums = result.map((item, index) => {
        return (
            <Grid item xs key={index}>
                <CardComponent albumNumber={item.albumId} thumbnailUrl={item.thumbnailUrl} />
            </Grid>
        )
    });

    return (
        <div>
            <Container disableGutters maxWidth="true" >
                <Grid container spacing={3} pr={2} pl={2} alignItems="center" style={{ minHeight: "90vh" }}>
                    {albums}
                </Grid>
            </Container>
        </div>
    );
}


export default AlbumsComponent;
