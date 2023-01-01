import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import './OutlinedCard.css';

export default function OutlinedCard() {
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Box sx={{ height: 100, width: 1400, display: 'inline-block', display: { xs: 'none', md: 'block' }, mx: '2px', transform: 'scale(0.8)' }} >
                <Card color="black" variant="outlined" style={{ background: "white", borderRadius: "32px", borderColor: 'red' }}>
                    <React.Fragment>
                        <CardContent >
                            <Grid container alignItems="center" justifyContent="center">
                                <Typography sx={{ fontSize: 80, fontFamily: 'Quicksand' }} color="black" gutterBottom>
                                    S H A R B E L &nbsp; A B O U &nbsp; S A B H A
                                </Typography>
                            </Grid>
                            <Grid container alignItems="center" justifyContent="center">
                                <Typography sx={{ fontSize: 50 }} variant="body2">
                                    <a href='https://github.com/sharbelxo' target="_blank" ><GitHubIcon color='black' fontSize='large' /></a>
                                    &nbsp;
                                    &nbsp;
                                    <a href='' target="_blank" ><LinkedInIcon fontSize='large' /></a>
                                    &nbsp;
                                    &nbsp;
                                    <a href='' target="_blank" ><InstagramIcon fontSize='large' /></a>
                                    &nbsp;
                                    &nbsp;
                                    <a href='' target="_blank" ><TwitterIcon fontSize='large' /></a>
                                    &nbsp;
                                    &nbsp;
                                    | <a href='' target="_blank">About</a>
                                </Typography>
                            </Grid>
                        </CardContent>
                    </React.Fragment>
                </Card>
            </Box >
            <Box sx={{ height: 100, width: 1400, display: 'inline-block', display: { xs: 'block', md: 'none' }, mx: '2px', transform: 'scale(0.8)' }}>
                <Card color="black" variant="outlined" style={{ background: "white", borderRadius: "32px", borderColor: 'red' }}>
                    <React.Fragment>
                        <CardContent >
                            <Grid container alignItems="center" justifyContent="center">
                                <Typography sx={{ fontSize: 20, fontFamily: 'BlinkMacSystemFont' }} color="black" gutterBottom>
                                    S H A R B E L &nbsp; A B O U &nbsp; S A B H A
                                </Typography>
                            </Grid>
                            <Grid container alignItems="center" justifyContent="center">
                                <Typography sx={{ fontSize: 20 }} variant="body2">
                                    <a href=''><GitHubIcon fontSize='small' /></a>
                                    &nbsp;
                                    &nbsp;
                                    <a href=''><LinkedInIcon fontSize='small' /></a>
                                    &nbsp;
                                    &nbsp;
                                    <a href=''><InstagramIcon fontSize='small' /></a>
                                    &nbsp;
                                    &nbsp;
                                    <a href=''><TwitterIcon fontSize='small' /></a>
                                    &nbsp;
                                    &nbsp;
                                    |<a href='' target="_blank">About</a>
                                </Typography>
                            </Grid>
                        </CardContent>
                    </React.Fragment>
                </Card>
            </Box >
        </Grid>
    );
}