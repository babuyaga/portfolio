import React from "react";
import "./productdata.scss";

function ProductData(){
return(
  <div className="product__data_holder">
      <div className="product__data_heading">BoredApeYachtClub</div>
      <div className="product__data_heading">#4586</div>
      <div className="product__data_sale"><span>Not for sale</span><span>1 edition</span></div>
      <div className="product__data_royaltycollection">
              <div className="product__creator_royalty">
                    <span className="product__creator_royalty_txt">Creator 0% royalties</span>
                    <div className="product__creator_tag"></div>
              </div>
              <div className="product__creator_royalty">
                    <span className="product__creator_royalty_txt">Collection</span>
                    <div className="product__creator_tag"></div>
              </div>
      </div>

      <div className="product__data_menu"><button>Details</button><button>Bids</button><button>History</button></div>
      <div className="product__menu_data">
          <div className="product__menu_card"><span>Owner</span> <div className="product__owner_menu_item"><div className="product__owner_add_pic"></div><span>0x68ea9ca....ad94d36e3</span></div></div>
          <div className="product__menu_card"><span>Property</span> <div className="product__owner_menu_item"></div></div>
          <div className="product__menu_card"><span>Blockchain</span> <div className="product__owner_menu_item"><div className="product__owner_add_pic"></div><span>0x68ea913a3caad94d33456e3</span></div></div>
      </div>

  </div>
);
}

export default ProductData;
