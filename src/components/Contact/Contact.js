import React from "react";
import "./Contact.css";

const Contact = props => (        
	<form onSubmit={props.sendMail.bind(this)} method="POST">
    	<label htmlFor="name">Name</label><br/>
    	<input type="text" name="name" className="formText" value={props.name} onChange={props.onNameChange.bind(this)} disabled={props.contactSent}/><br/>
    	<br/>
    	<label htmlFor="email">Email</label><br/>
    	<input type="email" name="email" className="formText" value={props.email} onChange={props.onEmailChange.bind(this)} disabled={props.contactSent}/><br/>
    	<br/>
    	<label htmlFor="message">Message</label><br/>
    	<textarea name="message" rows="3" className="formText" value={props.message} onChange={props.onMessageChange.bind(this)} disabled={props.contactSent}></textarea><br/>
    	<br/>
    	{ props.contactSent 
    		? <p>Your message has been sent. Thanks!</p>
    		: <input type="submit" disabled={!props.enable} />
    	}
  	</form>
);

export default Contact;