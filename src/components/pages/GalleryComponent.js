import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchGallery } from '../../store/slices/actions/fetchGallery'
import { useEffect } from 'react';

import ImageListComponent from '../UI/Gallery';
import SpinnerComponent from '../UI/Spinner';
import { add } from '../../store/slices/favourites'

function GalleryComponent() {

    const { id } = useParams();
    const data = useSelector(state => state.gallery);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGallery(id))
    }, [dispatch, id]);

    return (
        <div>
            {
                data.isLoading ? <SpinnerComponent /> :
                    <ImageListComponent items={data.items} action={add} actionType="adding" notificationType='success' customMessage="added successfuly" />
            }
        </div>
    );
}


export default GalleryComponent;
