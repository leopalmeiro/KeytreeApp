import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { inject, observer } from "mobx-react";
import Footer from "./footer";
import Menu from "../components/menu";
import UserInfo from "../components/userinfo";
import Organization from "../components/organization";
import Repository from "../components/repository";

@inject("UserStore")
@observer
class User extends Component {
	constructor(props) {
		super(props);
		const { UserStore } = this.props;
	}
	render() {
		const { UserStore } = this.props;
		return (
			<>
				{!UserStore.user && <Redirect to="/" />}

				<div class="container">
					<div class="content">
					<div class="row">
												<div class="col-12">

												<Menu />
												</div>
					</div>

						<div class="row justify-content-center">
							<div class="col-12">
								<UserInfo user={UserStore.user} />
							</div>
						</div>

						<div class="row justify-content-center">
							{UserStore.orgs.length > 0 && (
								<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
									<Organization orgs={UserStore.orgs} />
								</div>
							)}
							{UserStore.repo.length > 0 && (
								<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
									<Repository repo={UserStore.repo} />
								</div>
							)}
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

export default withRouter(User);
