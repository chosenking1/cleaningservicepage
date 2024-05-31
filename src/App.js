import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Navbar from './layouts/Navbar';


import ServiceSelection from './components/cleaningAgency/Service'


function App() {


  return (
    <Router>

        <Routes>
          
          <Route path="/" element={<Layout />} >
            <Route index element={< ServiceSelection />} />
           
            
          </Route>

        </Routes>
      
    </Router>
  );
};

export default App;
