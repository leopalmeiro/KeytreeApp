import React, { Component } from "react";

/* 
Method for input error message
@input message 
@return HTML component
*/
const Message = ({message}) => {
	return (
		<div class="alert alert-danger" role="alert">
			<strong>{message.message} </strong>
		</div>
	);
};

export default Message;
