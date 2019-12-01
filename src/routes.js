import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

//pages imports
import Index from "./pages/index";
import PageNotFound from "./pages/pagenotfound";
import User from "./pages/user";

/* 
	Router Method
*/
const Routes = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route path="/user" component={User} />
			<Route path="*" component={PageNotFound} />
		</Switch>
	</HashRouter>
);

export default Routes;
