import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';

import AboutUs from './pages/AboutUs';

import Services from './pages/Services';

import Insights from './pages/Insights';

import ContactUs from './pages/ContactUs';

import Approach from './pages/Approach'



const App = () => {

  return (

    <Router>

      <Navbar />

      <div style={styles.container}>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/services" element={<Services />} />

          <Route path="/insights" element={<Insights />} />

          <Route path="/approach" element={<Approach />} />

          <Route path="/contactus" element={<ContactUs />} />

        </Routes>

      </div>

    </Router>

  );

};



const styles = {

  container: {

    padding: '20px',

    margin: '30px auto',

    maxWidth: '1200px', // This ensures your content is centered and doesn't stretch too much on large screens

  },

};



export default App;