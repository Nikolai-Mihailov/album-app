import { useSelector } from 'react-redux'
import ImageListComponent from '../UI/Gallery';
import SpinnerComponent from '../UI/Spinner';
import { remove } from '../../store/slices/favourites';

function FavouritesComponent() {
    const data = useSelector(state => state.favourites);

    return (
        <div>
            {
                data.isLoading ? <SpinnerComponent /> :
                    <ImageListComponent items={data} action={remove} notificationType={'error'} customMessage="deleted successfuly" />
            }
        </div>
    );
}


export default FavouritesComponent;
