import React, {useState} from "react";
import "./searchinput.scss";

function SearchInput(prop){



return (
<div className="search__holder">
  <form className="search__form" onSubmit={prop.onFormSubmit} autocomplete="off">
<input type="text" autocomplete="off" onChange={prop.onFormChange} className="header__search_input" placeholder={prop.placeholdercomp} name="searchstring"/> <button type="submit"><i class="fas fa-search" id="search-icon-fontaw"></i></button>
<div className="search__dropdown"></div>
</form>
</div>);

}


export default SearchInput;
