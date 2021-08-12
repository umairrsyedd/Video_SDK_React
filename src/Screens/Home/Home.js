import React from 'react'
import "./Home.css"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
export default function Home() {
    return (
        <div className="Wrapper">
            <Container maxWidth="sm" className="Container__Main">
                <Paper className="Container__Second" elevation={3}>
                    <Typography variant="h4" gutterBottom>
                        What To Do?
                    </Typography>
                    <div className="HomeButton" >
                        <Button variant="contained" color="primary" size="medium" >
                            Host Meeting
                        </Button>
                        <Button variant="contained" color="primary" size="medium">
                            Join Meeting
                        </Button>
                    </div >
                </Paper>
            </Container >
        </div>
    )
}
