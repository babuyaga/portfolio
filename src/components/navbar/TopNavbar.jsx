import React, { useEffect ,useState} from "react";
import NavbarItem from "./NavbarItem.jsx";
import SearchInput from "./SearchInput.jsx";
import MenuButtonHolder from "./MenuButtonHolder.jsx";
import {iconsdesk,iconsphone} from "./icons.jsx";
import "./topnavbar.scss";


function TopNavbar(prop){
  const [logotext, setLogotext] = useState({color:"#000000"})
  const [logo,setLogo] = useState({border:"1px solid black",color:"black"});

const listenScrollEvent = (event) => {
  if (window.scrollY < 1440) {
    console.log("scrolled");
     setLogotext({color:"#000000"})
     setLogo({border:"1px solid black",color:"black"});
  } else if (window.scrollY > 1440) {
    console.log("scrolled back");
    setLogotext({color:"#ffffff"})
    setLogo({border:"1px solid white",color:"white"})
  } 
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

return(<div className="topnavbar" style={{backgroundColor:"ffffff"}}>
          <div className="topnavbar__width-control" >
            <NavbarItem id="logo"> <div className="comp__logo"><div className="logoholder" style={logotext}><div style={logo} className="logo_image"><h3>❒ I</h3></div><h1 >Jerry Jose</h1></div></div> </NavbarItem>
        {/* <NavbarItem id="search"> <SearchInput placeholdercomp="Search SilverVault" onFormSubmit={e=>e.preventDefault()}/> </NavbarItem> */}
                {/* <NavbarItem id="menu"><MenuButtonHolder screen="menu__desktop" icons={iconsdesk}/></NavbarItem> */}
                <MenuButtonHolder screen="menu__phone" icons={iconsphone}/>
          </div>

  </div>);
}

export default TopNavbar;
