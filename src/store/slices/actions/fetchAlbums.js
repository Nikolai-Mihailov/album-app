import { albumsAction } from "../albums";

export const fetchAlbums = () => {
    return async (dispatch) => {
        const fetchApi = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            if (!response.ok) {
                throw new Error('Could not fetch data...')
            }

            const data = await response.json();
            return data.filter(item => item.albumId <= 5);
        }

        try {
            const data = await fetchApi();
            dispatch(albumsAction.getAlbums({ items: data || [], isLoading: false, errorMsg: '' }))
        } catch (error) {
            // To do
            throw new Error(error.message)
        }

    }
}