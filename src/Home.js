import React, { useState, useEffect } from 'react';
import Particle from './components/Particle';
import ToggleSwitch from './components/ToggleSwitch';
import Hero from './components/Hero';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Quicksand',
            'cursive',
        ].join(','),
    },
});

const Home = () => {

    const [bgValue, setBgValue] = useState();
    const [pValue, setPValue] = useState();
    const [value, setValue] = useState(false);

    const [nameColor, setNameColor] = useState();
    const [linkColor, setLinkColor] = useState();

    const handleToggle = (event) => {
        setValue(event.target.checked);
        if (value === true) {
            setBgValue("#FFFFFF");
            setPValue("#000000");
            setLinkColor("#000000");
            setNameColor("#000000");
        } else {
            setBgValue("#000000");
            setPValue("#FFFFFF");
            setLinkColor("#FFFFFF");
            setNameColor("#FFFFFF");
        }
    }

    useEffect(() => {
        if (value === false) {
            setBgValue("#FFFFFF");
            setPValue("#000000");
            setNameColor("#000000");
            setLinkColor("#000000");
        } else {
            setBgValue("#000000");
            setPValue("#FFFFFF");
            setNameColor("#FFFFFF");
            setLinkColor("#FFFFFF");
        }
    }, [value])

    return (
        <ThemeProvider theme={theme}>
            <>
                <Particle bgValue={bgValue} pValue={pValue} />
                <ToggleSwitch handleToggle={handleToggle} mode={value} />
                <Hero nameColor={nameColor} linkColor={linkColor} />
            </>
        </ThemeProvider>
    );
}

export default Home;