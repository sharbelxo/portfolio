import GitHub from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
// import Twitter from '@mui/icons-material/Twitter';
import { Grid, Typography, Box, Link } from '@mui/material';
import React from 'react';

function Hero({ linkColor, nameColor }) {

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Box
                sx={{
                    height: 100,
                    width: { xs: 600, md: 1500 },
                    display: 'inline-block',
                    mx: '2px',
                    transform: 'scale(0.8)',
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '40vh' }}
                    direction="column"
                >
                    <Grid container alignItems="center" justifyContent="center">
                        <Typography variant="h1" color={nameColor} sx={{ fontSize: { xs: 40, md: 80 } }} align="center">
                            S h a r b e l &nbsp;
                            A b o u &nbsp;
                            S a b h a
                        </Typography>
                    </Grid>
                    <br />
                    <Grid container alignItems="center" justifyContent="center" direction="column">
                        <Typography variant="body2" sx={{ fontSize: { xs: 16, md: 40 } }} color={linkColor}>
                            <Link href="https://github.com/sharbelxo" target="_blank" color={linkColor}>
                                <GitHub sx={{ fontSize: { xs: 16, md: 35 } }} />
                            </Link>
                            &nbsp;&nbsp;
                            <Link href="https://www.linkedin.com/in/sharbelabousabha/" target="_blank" color={linkColor}>
                                <LinkedIn sx={{ fontSize: { xs: 16, md: 35 } }} />
                            </Link>
                            &nbsp;&nbsp;
                            <Link href="https://www.instagram.com/sharbelxo/" target="_blank" color={linkColor}>
                                <Instagram sx={{ fontSize: { xs: 16, md: 35 } }} />
                            </Link>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link href="https://www.linkedin.com/in/sharbelabousabha/" target="_blank" color={linkColor} underline="hover">
                                About
                            </Link>
                        </Typography>


                        <br />
                        <Typography variant="body2" sx={{ fontSize: { xs: 20, md: 30 } }}>
                            <Link href="https://nightventures.vercel.app/" target="_blank" color={linkColor} underline="hover">
                                N I G H T V E N T U R E S
                            </Link>
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: { xs: 20, md: 30 } }}>
                            <Link href="" color={linkColor} underline="hover">
                                A R T R A D E
                            </Link>
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: { xs: 20, md: 30 } }}>
                            <Link href="https://github.com/sharbelxo/NightOut" target="_blank" color={linkColor} underline="hover">
                                N I G H T O U T
                            </Link>
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: { xs: 20, md: 30 } }}>
                            <Link href="https://github.com/sharbelxo/KLIYO" target="_blank" color={linkColor} underline="hover">
                                K L I Y O
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}

export default Hero;
