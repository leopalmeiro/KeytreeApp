import React, { Component } from "react";

const Footer = () => {
	return (
			<div class="container">
				<div class="row justify-content-center">
						<label >Developed by Leonardo Palmeiro</label>
				</div>
				<div class="row justify-content-center">
					<div class="social-media-box">
						<div class="icon-social-media" data-toggle="tooltip" data-placement="top" title="Phone">
							<a href="tel:+34633585229">
								<i class="fa fa-phone" aria-hidden="true"></i>
							</a>
						</div>

						<div class="icon-social-media" data-toggle="tooltip" data-placement="top" title="Email">
							<a href="mailto:palmeiro.leonardo@gmail.com">
								<i class="fa fa-at"></i>
							</a>
						</div>

						<div class="icon-social-media" data-toggle="tooltip" data-placement="top" title="Linkedin">
							<a
								href="https://www.linkedin.com/in/leonardo-palmeiro-834a1755"
								target="_blank"
							>
								<i class="fa fa-linkedin"></i>
							</a>
						</div>
						<div class="icon-social-media" data-toggle="tooltip" data-placement="top" title="GitHub">
							<a href="https://github.com/leopalmeiro" target="_black">
								<i class="fa fa-github" aria-hidden="true"></i>
							</a>
						</div>
						<div class="icon-social-media" data-toggle="tooltip" data-placement="top" title="CodePen">
							<a href="https://codepen.io/Palmeiro" target="_black">
								<i class="fa fa-codepen" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Footer;
