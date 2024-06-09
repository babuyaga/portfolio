import React from "react";
import "./infocard.scss";
import Partition from "../Partition.jsx";

function InfoCard({partId,title,text}){
return(<Partition partid={partId} direction="column" bgcolor="transparent"><div className="info__card"><div className="info__card_icon"></div><span className="info__text info__title">{title}</span><span className="info__text">{text}</span></div></Partition>);

}


export default InfoCard;
