import React from "react";

function NavbarItem({children,id}){


return (<div className="navbar__item" id={id}>
{children}
</div>);
}


export default NavbarItem;
