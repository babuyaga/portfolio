import React from "react";
import "./rankholder.scss";
import RankCard from "../cards/RankCard.jsx";
import RankHeading from "../cards/RankHeading.jsx";

function RankHolder({children}){
  return(<div className="rank__division">
                <div className="rank__title">
                        <RankHeading/>
                </div>
          <div className="rank__list">
              <RankCard/>          <RankCard/>          <RankCard/>        
          </div>
        </div>);
}


export default RankHolder;
