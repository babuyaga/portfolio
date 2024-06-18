import React from 'react';
import './rankcard.scss';



function RankCard(prop){


/*const change = prop.data.change;*/
const {blog_title,link,subtitle,subject} = prop;


const linkOpen= ()=>{
    const openLink = () => {
      window.open(link, '_blank'); // Opens the link in a new tab
    };
    openLink();
  }


return(<div className="rank__card" onClick={linkOpen}>
<div className="rank__card_left">
{/* <div className="rankcard__nm_price" id="rankcard_rank">
    <span>{rank?rank:"x"}</span>
</div> */}
    <div className="collection__icon"><ul><li></li></ul></div>
    <div className="rankcard__nm_price">
        <span>{blog_title?blog_title:"Blog Post Title"}</span>
    </div>
</div>

{/* <div className="rank__card_price"><div className="rank__card_symb"> </div><span ></span></div> */}
<div className="rank__card_price"  id="rank__card_heading_owner"><span >{subtitle?subtitle:"********************"}</span></div>
{/* <div className="rank__card_price" id={change<0?"red__text":"green__text"}><span>{change>0?"+":""}</span><span>medium.com</span></div> */}
<div className="rank__card_price" id="subject">
  <span className="buffer"></span>
  <span id="green__text">{subject?subject:"medium.com"}</span>
  </div>
{/* <div className="rank__card_price" id="rank__card_heading_items"><span >{items?items:""}k</span></div> */}

{/*  <div className="rank__card_right">
  </div>
*/}
</div>);
}

export default RankCard;
