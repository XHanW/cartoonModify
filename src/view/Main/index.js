import React from 'react';
import MainHeader from './MainHeader';
import Slider from './Slider';
import News from './News';
import Server from './Server';
import Hot from './Hot';

const Main = () => {
    return (
        <React.Fragment>
            <MainHeader />
            <Slider />
            <News />
            <Server />
            <Hot />
        </React.Fragment>
    )
}

export default Main;
