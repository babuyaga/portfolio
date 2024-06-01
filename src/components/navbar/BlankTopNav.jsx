import React from "react";
import NavbarItem from "./NavbarItem.jsx";
import LogoDiv from "./LogoDiv";


function BlankTopNav(prop){
return(<div className="topnavbar"><div className="topnavbar-width-control"><NavbarItem idName="logo" innerComp={<LogoDiv/>} ></NavbarItem><NavbarItem idName="searchbar" innerComp={""}></NavbarItem><NavbarItem idName="menu" innerComp={""}></NavbarItem></div></div>);
}

export default BlankTopNav;
