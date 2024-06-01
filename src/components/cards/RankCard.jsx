import React from 'react';
import './rankcard.scss';
import CurrencyFormat from 'react-currency-format';

function RankCard(prop){

/*const change = prop.data.change;*/
const {rank,coll_name,volume,change,owners,items} = prop;

return(<div className="rank__card">
<div className="rank__card_left">
<div className="rankcard__nm_price" id="rankcard_rank">
    <span>{rank?rank:"x"}</span>
</div>
    <div className="collection__icon"></div>
    <div className="rankcard__nm_price">
        <span>{coll_name?coll_name:"xxxxxx"}</span>
    </div>
</div>

<div className="rank__card_price"><div className="rank__card_symb"> </div><span ><CurrencyFormat value={volume?volume:"0.00"} displayType={'text'} thousandSeparator={true} prefix={''} /></span></div>

<div className="rank__card_price" id={change<0?"red__text":"green__text"}><span>{change>0?"+":""}</span><span>{change?change:0}%</span></div>
<div className="rank__card_price"  id="rank__card_heading_owner"><span >{owners?owners:""}k</span></div>
<div className="rank__card_price" id="rank__card_heading_items"><span >{items?items:""}k</span></div>

{/*  <div className="rank__card_right">
  </div>
*/}
</div>);
}

export default RankCard;
