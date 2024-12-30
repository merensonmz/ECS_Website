import React from 'react';
import '../styles/Home.css';
import HomeSlider from '../components/HomeSlider';
import PopularProducts from '../components/PopularProducts';

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <PopularProducts />
    </div>
  );
};

export default Home; 