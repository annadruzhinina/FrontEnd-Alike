// Import React
import React, { useState } from "react";
// Import css for rightNavbar
import "./rightNavbar.css";
// Import Avatar from mui
import Avatar from "@mui/material/Avatar";
// import component
import MemberInfo from "../MemberInfo/MemberInfo.jsx";
//importing Rnavbar data for mapping
import { RnavbarData } from "./RnavbarData";
import { ListItem } from "@mui/material";

// our function
function RightNavbar() {

  return (
    <div className="rbar-container">
      <h1>Tech News</h1>
      {RnavbarData.map((data, index) => {
        return (
          <div className="articles">
            <div className="art-top">
              <Avatar></Avatar>
              <h3>{data.title}</h3>
            </div>
            <article>{data.article}
            </article>
             <a target='_blank' href={data.link}>Full Article &gt;</a>
          </div>
        )
      })}
    </div>
  );
}

export default RightNavbar;

{
  /* <p>
<a href="www.google.com">Anna</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Ryan</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Jose</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Nick</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Vasilis</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Jimy</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Ron</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Ari</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button> */
}
