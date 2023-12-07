import React from 'react';
import Home from './home/Home';
import Trips from './home/trips/Trips';
import { Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence
      initial={true} 
      mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
