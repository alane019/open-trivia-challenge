import React from "react";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory();
	const navigateToQuiz = () => history.push("/quiz");

	return (
		<div id="splash-page-container">

					{/* <Header /> */}
				<div id="splash-page">

					<h1 id="title" className="headline fade-in"> Open Trivia <br/> Challenge</h1>

					<h2 id="splash-subheading"> Put your trivia knowledge to the test. </h2>

					<button
						id="start-btn"
						className="btn btn-success action-btn fade-in"
						onClick={navigateToQuiz}
					>
						S T A R T
					</button>
					<Footer />
				</div>
			</div>
	);
}
