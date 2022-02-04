import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchGallery } from '../../store/slices/actions/fetchGallery'
import { useEffect } from 'react'
import ImageListComponent from '../UI/Gallery'

function GalleryComponent() {

    const { id } = useParams();
    const data = useSelector(state => state.gallery.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGallery(id))
    }, [dispatch]);


    return (
        <div>
            <ImageListComponent items={data} />
        </div>
    );
}


export default GalleryComponent;
