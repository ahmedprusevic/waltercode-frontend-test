import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { HomePage, SearchPage, ArticlePage } from "./containers";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Layout>
					<Switch>
						<Route path="/article/:idx">
							<ArticlePage />
						</Route>
						<Route path="/search/:query">
							<SearchPage />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</Provider>
	);
}

export default App;
