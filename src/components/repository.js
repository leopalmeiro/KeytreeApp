import React, { Component } from "react";
import { inject, observer } from "mobx-react";

/* 
Method for render IconLaguages
@input language: String 
@return HTML of the component
*/
const RenderIconLanguage = ({ language }) => {
	switch (language) {
		case "CSS":
			return (
				<td
					class="text-center"
					data-toggle="tooltip"
					data-placement="top"
					title={language}
				>
					<i class="fa fa-css3"></i>
				</td>
			);
		case "HTML":
			return (
				<td
					class="text-center"
					data-toggle="tooltip"
					data-placement="top"
					title={language}
				>
					<i class="fa fa-html5"></i>
				</td>
			);

		default:
			return (
				<td
					class="text-center"
					data-toggle="tooltip"
					data-placement="top"
					title={language}
				>
					{language}
				</td>
			);
	}
};

/* 
Method for fetch item of Repositories
@input List of Repository 
@return HTML of the component
*/
const ListRepo = ({ list }) => (
	<tbody>
		{list.map(item => (
			<tr>
				<td
					scope="row"
					data-toggle="tooltip"
					data-placement="top"
					title={item.name}
				>
					{item.name}
				</td>
				<td>
					<a
						href={item.html_url}
						target="_blank"
						data-placement="top"
						title={item.html_url}
					>
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
						<table data-spy="scroll" class="table table-striped table-inverse table-responsive table-hover">
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
/* 			<table class="table table-striped table-inverse table-responsive table-hover">
				<thead class="thead-inverse">
					<tr>
						<th>ddsaads</th>
						<th>dads</th>
						<th>dsdsa</th>
					</tr>
					</thead>
					<tbody>
						<tr>
							<td scope="row">ddsadsdsdasddads</td>
							<td>das</td>
							<td>dasds</td>
						</tr>
						<tr>
							<td scope="row">dadsadadadsd</td>
							<td>das</td>
							<td>dasd</td>
						</tr>
					</tbody>
			</table> */
