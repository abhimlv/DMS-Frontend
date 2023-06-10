import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container"></div>
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt=""  />
        </div>
        {/* <div className='home-image-container'>
            <img src={BannerImage} alt="" />
        </div> */}
        <div className="home-text-section">
            <h1 className="primary-heading">
                Machine Learning Chat Bot to Predict Diseases
            </h1>
            <p className='primary-text'>
                Disease Prediction using Machine Learning is a System that is used to predict the diseases from the given symptoms by the patients or a user. The system processes the symptoms provided by the user as input and gives the output as the probability of the disease. 
            </p>
            <input type="text" placeholder="Enter The Symptoms..."></input>
            <button className='secondary-button'>
                Search
            </button>
        </div>
       
    </div>
  )
}

export default Home;
