import React from 'react';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Main from '../Main/Main';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Main></Main>
            <Pricing></Pricing>
            <Footer></Footer>
        </div>
    );
};

export default Home;