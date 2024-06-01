import React from "react";
import './productpage.scss';
import TopNavbar from "./navbar/TopNavbar.jsx";
import SectionComp from "./SectionComp.jsx";
import Partition from "./Partition.jsx";
import ProductCard from "./cards/ProductCard.jsx";
import ProductData from "./menu/ProductData.jsx";

import * as appinfo from "./generalinfo.jsx";
function ProductPage(){
return(    <div className="app__holder">
      <div className="app">
  <TopNavbar/>
  <div className="app__body">
  <SectionComp className="all__section section__1" idnm="section__1">

    <Partition partid="product__square_1" direction="row" bgcolor="transparent">
    <ProductCard/>
    </Partition>
    <Partition direction="column" partid="product__square_2" bgcolor="transparent">
<Partition direction="column" partid="product__square_3" bgcolor="transparent">
<ProductData/>
<div className="product__menu_bottom"></div>
</Partition>
  </Partition>
</SectionComp>

  </div>


      </div>

      </div>);
}

export default ProductPage;
