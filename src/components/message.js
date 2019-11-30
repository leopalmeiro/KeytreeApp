import React, { Component } from "react";


const Message = ({message}) => {
	return (
		<div class="alert alert-danger" role="alert">
			<strong>{message.message} </strong>
		</div>
	);
};

export default Message;
