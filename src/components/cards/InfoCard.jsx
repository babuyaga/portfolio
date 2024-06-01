import React from "react";
import "./infocard.scss";
import Partition from "../Partition.jsx";

function InfoCard(prop){

  const text = "Once you've set up your metamask wallet, connect it to OpenSea by clicking the wallet icon in the top right corner."
return(<Partition partid={prop.partId} direction="column" bgcolor="transparent"><div className="info__card"><div className="info__card_icon"></div><span className="info__text info__title">Set up your wallet</span><span className="info__text">{text}</span></div></Partition>);

}


export default InfoCard;
