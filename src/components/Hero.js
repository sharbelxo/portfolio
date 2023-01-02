import GitHub from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { Grid, Typography, Box, Link } from '@mui/material';
import React from 'react';

function Hero({ linkColor, nameColor }) {

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Box sx={{ height: 100, width: 1500, display: 'inline-block', display: { xs: 'none', md: 'block' }, mx: '2px', transform: 'scale(0.8)' }} >
                <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '40vh' }} direction={'column'}>
                    <Grid container alignItems="center" justifyContent="center">
                        <Typography variant="h1" color={nameColor} sx={{ fontSize: 80 }}>
                            S h a r b e l &nbsp;  A b o u &nbsp; S a b h a
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" direction={'column'}>
                        <Typography variant="body2" sx={{ fontSize: 40 }} color={linkColor} >
                            <Link href='https://github.com/sharbelxo' target="_blank" color={linkColor} ><GitHub fontSize='large' /></Link>
                            &nbsp;
                            &nbsp;
                            <Link href='https://www.linkedin.com/in/sharbelabousabha/' target="_blank" color={linkColor} ><LinkedIn fontSize='large' /></Link>
                            &nbsp;
                            &nbsp;
                            <Link href='' target="_blank" color={linkColor} ><Instagram fontSize='large' /></Link>
                            &nbsp;
                            &nbsp;
                            <Link href='' target="_blank" color={linkColor} ><Twitter fontSize='large' /></Link>
                            &nbsp;
                            &nbsp;
                            |
                            &nbsp;
                            &nbsp;
                            <Link href='/portfolio/about' color={linkColor} underline="hover">About</Link>
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: 30 }}>
                            <Link href='https://github.com/sharbelxo/NightOut' target="_blank" color={linkColor} underline="hover">N I G H T O U T</Link>
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: 30 }}>
                            <Link href='https://github.com/sharbelxo/KLIYO' target="_blank" color={linkColor} underline="hover">K L I Y O</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box >
            <Box sx={{ height: 100, width: 1400, display: 'inline-block', display: { xs: 'block', md: 'none' }, mx: '2px', transform: 'scale(0.8)' }} >
                <Grid container alignItems="center" justifyContent="center" sx={{ display: { xs: 'flex', md: 'none' } }} style={{ minHeight: '40vh' }} direction={'column'}>
                    <Grid container alignItems="center" justifyContent="center">
                        <Typography variant="h1" color={nameColor} sx={{ fontSize: 40 }} >
                            S h a r b e l
                            <br />
                            &nbsp; &nbsp; A b o u
                            <br />
                            &nbsp; S a b h a
                        </Typography>
                    </Grid>
                    <br />
                    <Grid container alignItems="center" justifyContent="center" direction={'column'}>
                        <Typography variant="body2" sx={{ fontSize: 30 }} color={linkColor} >
                            <Link href='https://github.com/sharbelxo' target="_blank" color={linkColor}><GitHub fontSize='medium' /></Link>
                            &nbsp;
                            &nbsp;
                            <Link href='https://www.linkedin.com/in/sharbelabousabha/' target="_blank" color={linkColor}><LinkedIn fontSize='medium' /></Link>
                            &nbsp;
                            &nbsp;
                            <Link href='' target="_blank" color={linkColor}><Instagram fontSize='medium' /></Link>
                            &nbsp;
                            &nbsp;
                            <Link href='' target="_blank" color={linkColor}><Twitter fontSize='medium' /></Link>
                            &nbsp;
                            &nbsp;
                            |
                            &nbsp;
                            &nbsp;
                            <Link href='/portfolio/about' color={linkColor} underline="hover">About</Link>
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: 20 }}>
                            <Link href='https://github.com/sharbelxo/NightOut' target="_blank" color={linkColor} underline="hover">N I G H T O U T</Link>
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: 20 }}>
                            <Link href='https://github.com/sharbelxo/KLIYO' target="_blank" color={linkColor} underline="hover">K L I Y O</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box >
        </Grid >
    )
}

export default Hero;