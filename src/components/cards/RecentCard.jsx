import React from "react";
import "./recentcard.scss";


function RecentCard({projectName,projectDesc,link,linkDesc}){
return(<div className="recent__card">

    <div className="recent__card_img">
          <div className="creator__logo_holder">
              <div className="creator__logo" onClick={()=>{}}>
                <span className="creator__name">Creator name</span>
                </div>
          </div>
    </div>

    <div className="recent__card_info">
      <div className="recent__card_text">
        <span className="recent__card_title">Shooting from the Hip</span>
        <span className="recent__card_info_text">Street photography from Scott Strazzante's 2nd book</span>
      </div>
      <button className="recent__card_button">Visit Project </button>
    </div>

</div>);
}

export default RecentCard;
