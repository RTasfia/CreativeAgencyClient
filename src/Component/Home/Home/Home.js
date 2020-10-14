import React from 'react';
import Clients from '../Client/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Service></Service>
            <Work></Work>
            <Review></Review>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;