import React, { Component } from "react";
import NotFoundImage from "../assets/notfound.svg";
import { inject, observer } from "mobx-react";

/* 
Method for fetch item of Organizations
@input List of Organization 
@return HTML of the component
*/
const ListOrg = ({ list }) => (
	<>
		{list.map(item => (
			<a href={`https://github.com/${item.login}`} target="_blank">
				<img
					data-toggle="tooltip"
					data-placement="top"
					title={item.login}
					class="icon"
					src={item.avatar_url}
				/>
			</a>
		))}
	</>
);

@observer
class Organization extends Component {
	render = () => {
		const { orgs } = this.props;
		return (
			<>
				<div class="organization-box">
					<h3 class="text-center">Organizations</h3>
					<ListOrg list={orgs} />
				</div>
			</>
		);
	};
}
export default Organization;
