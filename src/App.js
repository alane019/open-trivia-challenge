import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./bootstrap.min.css";
import SplashPage from "./pages/SplashPage";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div id="app-outer" className="text-center fade-in-page">

				<Switch>
						<Route path="/quiz" component={Quiz} exact />
						<Route path="/results" component={Results} exact />
						<Route path="/" component={SplashPage} />
				</Switch>
		
			</div>
		</BrowserRouter>
	);
}

export default App;
