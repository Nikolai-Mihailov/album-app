import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


export default function HeaderComponent() {

    const favourites = useSelector(state => state.favourites);

    return (
        <Box sx={{ flexGrow: 1 }} pb={1}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ display: { sm: 'block' } }} >
                        Albums
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box >
                        <Link to="favourites" style={{ color: '#FFF' }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={favourites.length} color="error">
                                    <FavoriteIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}