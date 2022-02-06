import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SpinnerComponent() {
    return (
        <div>
            <Backdrop sx={{ color: '#fff' }} open>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}


