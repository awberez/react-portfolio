import React from "react";
import "./GalleryDisplay.css";

const GalleryDisplay = props => (          
	<div className="col-12">
  		<div id="bigTile">
  			<img src={props.image} className="displayImage" alt={props.name}/>
  			<h3>{props.name}</h3>
      		<p className="galleryText" >
        		<a href={props.link} target="blank"> Visit Site</a> - <a href={props.github} target="blank">Github</a>
      		</p>
      		<p className="galleryDescription">{props.text}</p>
          <hr/>
  		</div>
  	</div>
);

export default GalleryDisplay;