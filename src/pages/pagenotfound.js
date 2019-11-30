import React, { Component } from "react";
import Footer from "./footer";
import NotFoundImage from "../assets/notfound.svg";

class PageNotFound extends Component {
	render() {
		return (
			<>
				<div class="container">
					<div class="content">
						<div class="row justify-content-center">
							<div class="col-lg-6">
								<img class="notfound-img" src={NotFoundImage} />
							</div>
							<div class="col-lg-6">
								<h1>Opssss!!</h1>
								<h1>Something wrong</h1>
								<h1>Page not Found</h1>
                <a class="btn btn-primary" href="/" role="button">
								Try Again!
							</a>
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

export default PageNotFound;
