import React from "react";


function Partition({children,direction,bgcolor,partid}){

const style={flexDirection:direction,backgroundColor:bgcolor};

return(<div id={partid} className="section__partition" style={style}>
{children}
</div>);

}

export default Partition;
