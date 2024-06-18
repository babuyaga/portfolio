import React from 'react';
import './trendcard.scss';

function TrendCard({backgroundId,link}){

  const OpenLink = () => {
    const openLink = () => {
      window.open(link, '_blank'); // Opens the link in a new tab
    };
    openLink();
  }

return(
  <div className="trend__card" onClick={OpenLink} >
    <div className="image-holder--trend" id={backgroundId}></div>

  </div>
);
}

export default TrendCard;
