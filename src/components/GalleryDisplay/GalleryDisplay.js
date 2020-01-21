import React from "react";
import "./GalleryDisplay.css";

const GalleryDisplay = props => (          
	<div className="col-12">
  		<div id="bigTile">
  			<img src={props.image} className="displayImage" alt={props.name}/>
  			<h3>{props.name}</h3>
      		<p className="galleryText" >
        		<a href={props.link} target="blank">Site</a> - <a href={props.github} target="blank">Github</a>
      		</p>
      		<hr/>
      		<p>{props.text}</p>
  		</div>
  	</div>
);

export default GalleryDisplay;