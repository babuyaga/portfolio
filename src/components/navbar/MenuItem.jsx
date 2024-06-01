import React from "react";

const handleClick = e=>{
  console.log(e);
}


function MenuItem({idnm,children}) {


  return(<button className="menu-item" onClick={handleClick} ><div className="icon__holder"><div className="icon" id={idnm}></div><span className="icon__text">{children}</span></div></button>);
}


export default MenuItem;
