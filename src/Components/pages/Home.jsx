import React from 'react';
import '../../main.scss';
import Scrollpbar from '../Scrollpbar';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <>
           <Scrollpbar />
           <HeroSection />
           <Cards />
           <Footer />
            
        </>
    );
}
export default Home;
