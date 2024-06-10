import React from "react";
import "./recentcard.scss";
import { Link } from "react-router-dom";

function RecentCard({projectName,projectDesc,gitlink,linkDesc,imageClass,projectlink}){


  const OpenGit = () => {
    const openLink = () => {
      window.open(gitlink, '_blank'); // Opens the link in a new tab
    };
    openLink();
  }

  const OpenProject = () => {
    const openLink = () => {
      window.open(projectlink, '_blank'); // Opens the link in a new tab
    };
    openLink();
  }

  



return(<div className="recent__card">

    <div className={`recent__card_img ${imageClass}`}>
          <div className="creator__logo_holder" onClick={OpenGit}>
              <div className="creator__logo">
                <span className="creator__name">{linkDesc}</span>
                </div>
          </div>
    </div>

    <div className="recent__card_info">
      <div className="recent__card_text">
        <span className="recent__card_title">{projectName}</span>
        <span className="recent__card_info_text">{projectDesc}</span>
      </div>
      <button className="recent__card_button" onClick={OpenProject}>Visit Project </button>
    </div>

</div>);
}

export default RecentCard;
