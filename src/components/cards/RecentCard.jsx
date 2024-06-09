import React from "react";
import "./recentcard.scss";
import { Link } from "react-router-dom";

function RecentCard({projectName,projectDesc,link,linkDesc,imageClass}){
return(<div className="recent__card">

    <div className={`recent__card_img ${imageClass}`}>
          <div className="creator__logo_holder">
              <div className="creator__logo" onClick={()=>{}}>
                <span className="creator__name">{linkDesc}</span>
                </div>
          </div>
    </div>

    <div className="recent__card_info">
      <div className="recent__card_text">
        <span className="recent__card_title">{projectName}</span>
        <span className="recent__card_info_text">{projectDesc}</span>
      </div>
      <button className="recent__card_button">Visit Project </button>
    </div>

</div>);
}

export default RecentCard;
