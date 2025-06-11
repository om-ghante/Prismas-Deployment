import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from '../components/header/NavBar';
import HeroSection from '../components/hero/Hero';
import WelcomeSection from '../components/welcome/Welcome';
import Timeline from '../components/timeline/TimeLine';
import Courses from '../components/courses/Courses';
import FeaturesSection from '../components/features/Features';
import DirectorMessage from '../components/directormsg/DirectorMsg';
import ContactForm from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div data-aos="fade-up" data-aos-delay="100"><HeroSection /></div>
      <div data-aos="fade-up" data-aos-delay="200"><WelcomeSection /></div>
      <div data-aos="fade-right" data-aos-delay="300"><Timeline /></div>
      <div data-aos="fade-up" data-aos-delay="400"><Courses /></div>
      <div data-aos="fade-left" data-aos-delay="500"><FeaturesSection /></div>
      <div data-aos="zoom-in" data-aos-delay="600"><DirectorMessage /></div>
      <div data-aos="fade-up" data-aos-delay="700"><ContactForm /></div>
      <Footer />
    </div>
  );
};

export default Home;
