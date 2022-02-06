import axios from "axios";
import { updateSuccess, updateStart, updateError } from "../gallery";

export const fetchGallery = (id) => {
    return async (dispatch) => {
        dispatch(updateStart());
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
            const data = res.data.filter(item => item.albumId <= 5).map(item => ({ ...item, liked: false }));
            dispatch(updateSuccess({ items: data || [], isLoading: false, errorMsg: '' }))
        } catch (error) {
            // In production we need to have custom errors. It's not good practice to return actual error to the customers.
            dispatch(updateError({ errorMsg: error || error.message }))
        }
    }
}
