import React from "react";
import "./cardholder.scss";


function CardHolder({children}){
return(<div className="card__holder">
{children}
</div>);
}

export default CardHolder;
