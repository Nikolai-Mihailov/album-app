import { useSelector } from 'react-redux'
import ImageListComponent from '../UI/Gallery';
import SpinnerComponent from '../UI/Spinner';

function FavouritesComponent() {
    const data = useSelector(state => state.favourites);

    return (
        <div>
            {
                data.isLoading ? <SpinnerComponent /> :
                    <ImageListComponent items={data} />
            }
        </div>
    );
}


export default FavouritesComponent;
