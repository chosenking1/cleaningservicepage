import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../apiConfig';

import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

import { allLinks } from '../helpers/LinkDetails';




const Navbar = () => {
  const Links = [
    { name: 'HOME', link: '/task' },
    { name: 'CREATE TASK', link: '/task/create' },
    { name: 'CREATE DEPARTMENT', link: '/department/create' },
  ];



  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Collections",
      link: "#"
    },
    {
      labe: "Men",
      link: "#"
    },
    {
      labe: "About",
      link: "#"
    },
    {
      labe: "Contact",
      link: "#"
    }
  ];


  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  axios.defaults.baseURL = apiUrl;
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    // Find the current page name based on the current location pathname
    const currentPageObj = allLinks.find(link => link.link === location.pathname);
    setCurrentPage(currentPageObj ? currentPageObj.name : 'Unknown');
  }, [location.pathname]);


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


  return (

    <div className="">

      

    </div>


  );
};

export default Navbar;
