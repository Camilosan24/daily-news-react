import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./hoc/mainLayout.js";

import Home from "./components/home";
import Contact from "./components/contact/index";
import Header from "./components/header";
import PostComponent from './components/posts/index'

const Routes = () => (
	<BrowserRouter>
		<Header />
		<MainLayout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/article/:id" component={PostComponent} />
			</Switch>
		</MainLayout>
	</BrowserRouter>
);

export default Routes;
