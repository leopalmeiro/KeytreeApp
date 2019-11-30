import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@observer
class UserInfo extends Component {
	render() {
		const { user } = this.props;

		console.log("user avatar: =>>" + JSON.stringify(user));

		return (
			<>
				<div
					class="avatar-box"
					data-toggle="tooltip"
					data-placement="top"
					title={user.html_url}
				>
					<a href={user.html_url} target="_blank">
						<img class="avatar" src={user.avatar_url} />
					</a>
				</div>
				<div
					class="user-info-box"
					data-toggle="tooltip"
					data-placement="top"
					title="User Name"
				>
					<label class="user-name">{user.name}</label>
				</div>
	
				<div class="user-info-box">
					{user.company && (
						<div
							class="user-info-row"
							data-toggle="tooltip"
							data-placement="top"
							title="Company"
						>
							<a href="#">
								<i class="fa fa-briefcase no-link" aria-hidden="true"></i>{" "}
								{user.company}
							</a>
						</div>
					)}
					{user.location && (
						<div
							class="user-info-row"
							data-toggle="tooltip"
							data-placement="top"
							title="Location"
						>
							<a href="">
								<i class="fa fa-map-marker no-link" aria-hidden="true"></i>
								{user.location}
							</a>
						</div>
					)}
					{user.email && (
						<div
							class="user-info-row"
							data-toggle="tooltip"
							data-placement="top"
							title="Email"
						>
							<a href={"mailto:" + user.email}>
								<i class="fa fa-envelope " aria-hidden="true"></i>
								{user.email}
							</a>
						</div>
					)}
					{user.blog && (
						<div
							class="user-info-row"
							data-toggle="tooltip"
							data-placement="top"
							title="Blog"
						>
							<a href={user.blog} target="_blank">
								<i class="fa fa-globe" aria-hidden="true"></i>
								{user.blog}
							</a>
						</div>
					)}
				</div>
			</>
		);
	}
}

export default UserInfo;
