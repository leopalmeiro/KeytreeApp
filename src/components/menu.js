import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import UserStore from "../stored/userstore";
import { inject, observer } from "mobx-react";

@inject("UserStore")
@observer
class Menu extends Component {
	constructor(props) {
		super(props);
	}

	logout = () => {
		const { UserStore } = this.props;

		UserStore.logout();

		this.props.history.push("/");
	};

	render = () => {
		return (
				<nav class="navbar navbar-expand-end navbar-light bg-light">
					<div class="nav navbar-nav">
						<button type="button" class="btn btn-outline-primary" onClick={this.logout}  data-toggle="tooltip" data-placement="top" title="Initial Page">
							Home
						</button>
					</div>
				</nav>
		);
	};
}
export default withRouter(Menu);

