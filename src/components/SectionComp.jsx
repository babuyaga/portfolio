import React from "react";

function SectionComp({children,className,idnm}){
return(
  <section className={className} id={idnm}>{children}</section>
);
}

export default SectionComp;
