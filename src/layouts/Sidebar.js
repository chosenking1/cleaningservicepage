import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../apiConfig';

import { mainLinks } from '../helpers/LinkDetails';


var logo = ""
const Sidebar = () => {
  const Links = [
    { name: 'HOME', link: '/task' },
    { name: 'CREATE TASK', link: '/task/create' },
    { name: 'CREATE DEPARTMENT', link: '/department/create' },
  ];



  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');


  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  axios.defaults.baseURL = apiUrl;


  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };


  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkAuthentication();
  }, [location]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      // Call the logout API
      await axios.post('/api/logout', null, {
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          Authorization: `Bearer ${token}`,
        },
      });
      // Remove the token from localStorage
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      // Redirect to the signup page
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const onToggleMenu = () => {
    setOpen(!open);
  };
  return (

    <section className='w-50% flex'>
     

    </section>


  );
};

export default Sidebar;