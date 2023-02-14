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
      <h3>Tech News</h3>
      <div className="resourceContainer">
        {RnavbarData.map((data, index) => {
          return (
            <div className="articles">              
                <img src={data.img} alt={data.alt} />
                <h4>{data.title}
                <br/><a target='_blank' href={data.link}> 👉 Read More</a>
                </h4>           

            </div>
          )
        })}
      </div>
      <div className="vid-container">
      <iframe width="310" height="235" src="https://www.youtube.com/embed/W6NZfCO5SIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
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
