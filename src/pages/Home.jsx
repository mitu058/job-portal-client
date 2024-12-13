import React from 'react';
import Header from '../components/Header';
import PopularJob from '../components/PopularJob';

const Home = () => {
    return (
        <div className='my-16'>
          <Header></Header>
          <PopularJob></PopularJob>
        </div>
    );
};

export default Home;