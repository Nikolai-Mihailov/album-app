import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'

function CardComponent(props) {
    return (
        <div>
            <Link to={"/gallery/" + props.albumNumber}>
                <Card sx={{ minWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={props.thumbnailUrl}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Album {props.albumNumber}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div >
    );
}

export default CardComponent;