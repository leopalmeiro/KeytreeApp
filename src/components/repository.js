import React, { Component } from "react";
import { inject, observer } from "mobx-react";

const RenderIconLanguage = ({ language }) => {
	switch (language) {
		case "CSS":
			return (
				<td data-toggle="tooltip" data-placement="top" title={language}>
					<i class="fa fa-css3"></i>
				</td>
			);
		case "HTML":
			return (
				<td data-toggle="tooltip" data-placement="top" title={language}>
					<i class="fa fa-html5"></i>
				</td>
			);
			
		default:
			return <td data-toggle="tooltip" data-placement="top" title={language}>{language}</td>;
	}
};

const ListRepo = ({ list }) => (
	<tbody>
		{list.map(item => (
			<tr>
				<td scope="row">{item.name}</td>
				<td>
					<a href={item.html_url} target="_blank">
						{item.html_url}
					</a>
				</td>
				<RenderIconLanguage language={item.language} />
			</tr>
		))}
	</tbody>
);

@observer
class Repository extends Component {
	render = () => {
		const { repo } = this.props;
		return (
			<>
				<div class="organization-box">
					<h3 class="text-center">Repositories</h3>
					<div class="table-wrapper">
						<table class="table table-striped table-hover ">
							<thead class="thead-inverse">
								<tr>
									<th>Repository</th>
									<th>Link</th>
									<th>Language</th>
								</tr>
							</thead>
							<ListRepo list={repo} />
						</table>
					</div>
				</div>
			</>
		);
	};
}

export default Repository;
