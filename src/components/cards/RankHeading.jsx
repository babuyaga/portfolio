import React from 'react';
import './rankheading.scss';


function RankHeading(prop){

/*const change = prop.data.change;*/

return(<div className="rank__card_heading">
<div className="rank__card_heading_left">


    <div className="rankcard__headingnm_price">
                <span></span>
        <span>Title</span>
    </div>

</div>


<div className="rank__card_heading_price" id="rank__card_heading_owner"><span ></span></div>
<div className="rank__card_heading_price" id="rank__card_heading_items"><span >Topic</span></div>

 <div className="rank__card_heading_right">
  </div>

</div>);
}

export default RankHeading;
