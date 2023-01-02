import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Particle from './components/Particle';
import ToggleSwitch from './components/ToggleSwitch';

const About = () => {

    const [bgValue, setBgValue] = useState();
    const [pValue, setPValue] = useState();
    const [value, setValue] = useState(false);

    const handleToggle = (event) => {
        setValue(event.target.checked);
        if (value === true) {
            setBgValue("#FFFFFF");
            setPValue("#000000");
        } else {
            setBgValue("#000000");
            setPValue("#FFFFFF");
        }
    }

    useEffect(() => {
        if (value === false) {
            setBgValue("#FFFFFF");
            setPValue("#000000");
        } else {
            setBgValue("#000000");
            setPValue("#FFFFFF");
        }
    }, [value])

    return (
        <>
            <Particle bgValue={bgValue} pValue={pValue} />
            <Grid container alignItems="center" justifyContent="center" style={{ maxHeight: '15vh' }}>
                <ToggleSwitch handleToggle={handleToggle} mode={value} />
            </Grid>
        </>
    )
}

export default About;