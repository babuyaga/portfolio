import React from "react";
import "./infocard.scss";
import Partition from "../Partition.jsx";

function InfoCard({partId,title,text}){
return(<Partition direction="column" bgcolor="transparent"><div className="info__card"><div className="info__card_icon" id={partId}></div><span className="info__text info__title">{title}</span><span className="info__text info__content">{text}</span></div></Partition>);

}


export default InfoCard;
