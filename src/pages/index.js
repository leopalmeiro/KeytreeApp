import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Footer from "./footer";
import Logo from "../assets/logo.png";

import UserStore from "../stored/userstore";

import Message from "../components/message";

@inject("UserStore")
@observer
class Index extends Component {
	state = { user: "" };

	/* constructor method */
	constructor(props) {
		super(props);
		const { UserStore } = this.props;
	}

	/* 
Method for chandleChanges of components
@input e: events
*/
	handleChange = e => {
		this.setState({ user: e.target.value });
	};

	/* 
Method for handleSend to redirect to another pages.
@input e: events
*/
	handleSend = e => {
		const { UserStore } = this.props;
		UserStore.getUserInfo(this.state.user);
	};

	/* Render Method */
	render() {
		const { UserStore } = this.props;
		return (
			<>
				{UserStore.user && <Redirect to="/user" />}
				<div class="container">
					<div class="content">
						<div class="row justify-content-center">
							<img class="logo" src={Logo} alt="logo" />
						</div>

						<div class="row justify-content-center">
							<div class="col-lg-1-12">
								<h1 class="text-center">Welcome</h1>
								<h1 class="text-center">Keytree Interview Test</h1>
								<h3 class="text-center">
									Please Type GitHub User for find It!
								</h3>
							</div>
						</div>
						{UserStore.error && (
							<div class="row justify-content-center">
								<div class="input-box">
									<Message message={UserStore.error} />
								</div>
							</div>
						)}
						<div class="row justify-content-center">
							<div class="input-box">
								<input
									class="form-control"
									placeholder="Username"
									aria-label="Username"
									aria-describedby="basic-addon1"
									onChange={this.handleChange}
									value={this.state.user}
									data-toggle="tooltip" data-placement="top" title="Type GitHub User for find it!"
								/>
							</div>
						</div>
						<div class="row justify-content-center">
							<div class="input-box">
								{UserStore.isFetching ? (
									<button
										class="btn btn-primary btn-lg btn-block"
										type="button"
										disabled
									>
										<span
											class="spinner-border spinner-border-sm"
											role="status"
											aria-hidden="true"
										></span>
										Loading...
									</button>
								) : (
									<button
										type="button"
										class="btn btn-primary btn-lg btn-block"
										onClick={this.handleSend}
									>
										Search
									</button>
								)}
							</div>
						</div>
					</div>

					<div class="row">
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(Index);
