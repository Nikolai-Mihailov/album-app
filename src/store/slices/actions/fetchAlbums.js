import axios from "axios";
import { updateStart, updateSuccess, updateError } from "../albums";

export const fetchAlbums = () => {
    return async (dispatch) => {
        dispatch(updateStart());
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            const data = res.data.filter(item => item.albumId <= 5);
            dispatch(updateSuccess({ items: data }))

        } catch (error) {
            // In production we need to have custom errors. It's not good practice to return actual errors to the customers.
            dispatch(updateError({ errorMsg: error || error.message }))
        }
    }
}

