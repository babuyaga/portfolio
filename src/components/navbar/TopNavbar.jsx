import React from "react";
import NavbarItem from "./NavbarItem.jsx";
import SearchInput from "./SearchInput.jsx";
import MenuButtonHolder from "./MenuButtonHolder.jsx";
import {iconsdesk,iconsphone} from "./icons.jsx";
import "./topnavbar.scss";


function TopNavbar(prop){


return(<div className="topnavbar">
          <div className="topnavbar__width-control" >
            <NavbarItem id="logo"> <div className="comp__logo"><h1>Product Messaih</h1></div> </NavbarItem>
        {/* <NavbarItem id="search"> <SearchInput placeholdercomp="Search SilverVault" onFormSubmit={e=>e.preventDefault()}/> </NavbarItem> */}
                <NavbarItem id="menu"><MenuButtonHolder screen="menu__desktop" icons={iconsdesk}/><div className="comp__logo" id="menu__button"></div></NavbarItem>
                <MenuButtonHolder screen="menu__phone" icons={iconsphone}/>
          </div>

  </div>);
}

export default TopNavbar;
