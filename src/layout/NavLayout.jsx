import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SlideMenu from "../components/SlideMenu";

const NavLayout = () => {
  return (
    <>
      <SlideMenu></SlideMenu>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
};

export default NavLayout;
