import React from 'react';
import './rankheading.scss';
import CurrencyFormat from 'react-currency-format';

function RankHeading(prop){

/*const change = prop.data.change;*/

return(<div className="rank__card_heading">
<div className="rank__card_heading_left">


    <div className="rankcard__headingnm_price">
                {/* <span>#.</span>
        <span>Collection</span> */}
    </div>

</div>
{/* 
<div className="rank__card_heading_price"><span >Volume</span></div>

<div className="rank__card_heading_price"><span >Change</span></div>
<div className="rank__card_heading_price" id="rank__card_heading_owner"><span >Owners</span></div>
<div className="rank__card_heading_price" id="rank__card_heading_items"><span >Items</span></div> */}

{/*  <div className="rank__card_heading_right">
  </div>
*/}
</div>);
}

export default RankHeading;
