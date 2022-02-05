import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAlbums } from '../../store/slices/actions/fetchAlbums';
import { Grid, Container } from '@mui/material'

import CardComponent from '../UI/Card';
import SpinnerComponent from '../UI/Spinner';
import { setGalleryToInitialState } from '../../store/slices/gallery';


function AlbumsComponent() {

    const map = new Map();
    const result = [];
    const data = useSelector(state => state.albums);
    const dispatch = useDispatch();


    // Get the unique albums ID whit thumbnailUrl
    data.items.forEach(item => {
        if (!map.has(item.albumId)) {

            map.set(item.albumId, true)
            result.push({
                albumId: item.albumId,
                thumbnailUrl: item.thumbnailUrl
            })
        }
    });
    // TO DO
    useEffect(() => {
        dispatch(setGalleryToInitialState())
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    const albums = result.map((item, index) => {
        return (
            <Grid item xs={6} sm={6} md={4} lg={4} key={index}>
                <CardComponent albumNumber={item.albumId} thumbnailUrl={item.thumbnailUrl} />
            </Grid>
        )
    });

    return (
        <div>
            <Container disableGutters  >
                {data.isLoading ? <SpinnerComponent /> :
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        {albums}
                    </Grid>}
            </Container>
        </div>
    );
}


export default AlbumsComponent;
