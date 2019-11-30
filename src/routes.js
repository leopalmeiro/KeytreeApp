import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//imports od pages
import Index from "./pages/index";
import PageNotFound from "./pages/pagenotfound";
import User from "./pages/user";


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (
			<Redirect to={{ pathname: "/", state: { from: props.location } }} />
		)}
	/>
);

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route path="/user" component={User} />
			<Route path="*" component={PageNotFound} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
