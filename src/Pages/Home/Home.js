import React from 'react';
import Products from '../Products/Products';
import About from './About/About';
import Banner from './Banner/Banner';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Service/>
            <Products/>
        </div>
    );
};

export default Home;