import GitHub from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Grid, Typography, Box, Link } from '@mui/material';
import React from 'react';

function Hero({ linkColor, nameColor }) {

    return (
        <Box
            sx={{
                maxWidth: { xs: 600, md: 1500 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mx: '2px',
                transform: 'scale(0.8)',
                paddingTop: { xs: 20, md: 15 }
            }}
        >
            <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
                {/* desktop view */}
                <Grid item display={{ xs: 'block', md: 'none' }}>
                    <Typography color={nameColor} sx={{ fontSize: 40, textAlign: "center", whiteSpace: "pre-line" }}>
                        S h a r b e l {"\n"}
                        A b o u {"\n"}
                        S a b h a
                    </Typography>
                </Grid>
                {/* mobile view */}
                <Grid item display={{ xs: 'none', md: 'block' }}>
                    <Typography color={nameColor} sx={{ fontSize: 80, textAlign: "center", whiteSpace: "pre-line" }}>
                        S h a r b e l &nbsp;
                        A b o u &nbsp;
                        S a b h a
                    </Typography>
                </Grid>
                <Grid item container alignItems="center" justifyContent="center" direction="column">
                    <Grid container alignItems="center" justifyContent="center" direction="row" spacing={2}>
                        <Grid item>
                            <Link href="https://github.com/sharbelxo" target="_blank" color={linkColor}>
                                <GitHub sx={{ fontSize: { xs: 20, md: 35 } }} />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://www.linkedin.com/in/sharbelabousabha/" target="_blank" color={linkColor}>
                                <LinkedIn sx={{ fontSize: { xs: 20, md: 35 } }} />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://www.instagram.com/sharbelxo/" target="_blank" color={linkColor}>
                                <Instagram sx={{ fontSize: { xs: 20, md: 35 } }} />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Typography color={nameColor} sx={{ fontSize: { xs: 35, md: 50 } }}>
                                |
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" sx={{ fontSize: { xs: 20, md: 30 } }}>
                                <Link href="https://www.linkedin.com/in/sharbelabousabha/" target="_blank" color={linkColor} underline="hover">
                                    About
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
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

    );
}

export default Hero;