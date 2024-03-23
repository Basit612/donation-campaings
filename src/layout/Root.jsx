import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shahed/NavBar/NavBar';


const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;