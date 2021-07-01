import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

export default function Home() {
	const history = useHistory();
	const navigateToQuiz = () => history.push("/quiz");

	return (
		<div id="home-container">
			<div className="home-content">
					<Header />
				<div id="home">

					<h1 className="headline">Welcome to React Trivia Challenge</h1>

					<h2 id="center-text">Press start to test your trivia knowledge.</h2>

					<button
						id="action-btn"
						className="btn btn-success action-btn"
						onClick={navigateToQuiz}
					>
						Start Challenge
					</button>
					<Footer />
				</div>
			</div>
		</div>
	);
}
