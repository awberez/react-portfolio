import React from "react";
import "./PageTab.css";

const PageTab = props => (          
	<button type="button" className={props.focus} onClick={() => props.selectView(props.id)}><div className="btnColor">{props.name}</div></button>
);

export default PageTab;