import { galleryAction } from "../gallery";

export const fetchGallery = (id) => {
    return async (dispatch) => {
        const fetchApi = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
            if (!response.ok) {
                throw new Error('Could not fetch data...')
            }

            const data = await response.json();
            return data.filter(item => item.albumId <= 5);
        }

        try {
            const data = await fetchApi();
            dispatch(galleryAction.getGallery({ items: data || [], isLoading: false, errorMsg: '' }))
        } catch (error) {
            // To do
            throw new Error(error.message)
        }

    }
}