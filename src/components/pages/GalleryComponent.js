import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchGallery } from '../../store/slices/actions/fetchGallery'
import { useEffect } from 'react';

import ImageListComponent from '../UI/Gallery';
import SpinnerComponent from '../UI/Spinner';

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
                    <ImageListComponent items={data.items} />
            }
        </div>
    );
}


export default GalleryComponent;
