import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import TimeTable from '../TimeTable/TimeTable';
import Core from '../CoreFeatures/Core';
import Cus from '../Customer/Cus';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TimeTable />
            <Team></Team>
            <Core></Core>
            <Cus></Cus>

        </div>
    );
};

export default Home;