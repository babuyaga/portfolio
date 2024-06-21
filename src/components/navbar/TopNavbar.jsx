import React, { useEffect ,useState} from "react";
import NavbarItem from "./NavbarItem.jsx";
import SearchInput from "./SearchInput.jsx";
import MenuButtonHolder from "./MenuButtonHolder.jsx";
import {iconsdesk,iconsphone} from "./icons.jsx";
import "./topnavbar.scss";


function TopNavbar(prop){
  const [header, setHeader] = useState({color:"#000000",borderLeft: "5px solid #000000"})

const listenScrollEvent = (event) => {
  if (window.scrollY < 1440) {
    console.log("scrolled");
    return setHeader({color:"#000000",    borderLeft: "5px solid #000000"})
  } else if (window.scrollY > 1440) {
    console.log("scrolled back");
    return setHeader({color:"#ffffff",    borderLeft: "5px solid #ffffff"})
  
  } 
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

return(<div className="topnavbar" style={{backgroundColor:"ffffff"}}>
          <div className="topnavbar__width-control" >
            <NavbarItem id="logo"> <div className="comp__logo"><h1 style={header}>Jerry Jose</h1></div> </NavbarItem>
        {/* <NavbarItem id="search"> <SearchInput placeholdercomp="Search SilverVault" onFormSubmit={e=>e.preventDefault()}/> </NavbarItem> */}
                {/* <NavbarItem id="menu"><MenuButtonHolder screen="menu__desktop" icons={iconsdesk}/></NavbarItem> */}
                <MenuButtonHolder screen="menu__phone" icons={iconsphone}/>
          </div>

  </div>);
}

export default TopNavbar;
