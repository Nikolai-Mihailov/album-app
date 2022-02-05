import { Snackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../store/slices/message";

export default function MessageComponent() {

    const { open, type, message } = useSelector(state => state.message);
    const dispatch = useDispatch()

    const hemdleClose = () => {
        dispatch(update(true, type, message))
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'left', variant: 'success' }}
                open={open}
                onClose={hemdleClose}
                autoHideDuration={1500}>
                <Alert
                    variant="filled"
                    onClose={hemdleClose}
                    color={type}>
                    {message}
                </Alert>
            </Snackbar>
        </div >
    )
}