import { Container, Box, Typography } from "@mui/material";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
        </Typography>
    );
}


export default function FooterComponent() {

    return (
        <div>
            <Container maxWidth="md" component="footer">
                <Box mt={5} height={200}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}