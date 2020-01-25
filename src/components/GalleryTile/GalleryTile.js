import React from "react";
import "./GalleryTile.css";

const GalleryTile = props => (          
	<div className="col-4 col-sm-3 col-lg-6">
  		<div className="tile" onClick={() => props.selectTile(props.id)}>
  			<img src={props.image} className="tileImage" alt={props.name}></img>
  		</div>
  	</div>
);

export default GalleryTile;