import React from "react";
import MenuItem from "./MenuItem.jsx";
import "./menuholder.scss";




function MenuButtonHolder(prop){
const icons = prop.icons;
const idName= prop.screen;

  function item(icon){
    return(<MenuItem idnm={icon.class}><span>{icon.name}</span></MenuItem>);}

  return (<div className= "menu__holder" id={idName}>
  {icons.map(item)}
  </div>);

}

export default MenuButtonHolder;
