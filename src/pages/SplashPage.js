import React from "react";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory();
	const navigateToQuiz = () => history.push("/quiz");

	return (
		<div id="splash-page-container">
			<div className="splash-page-content">
					{/* <Header /> */}
				<div id="splash-page">

					<h1 id="title" className="headline"> React Trivia <br/> Challenge</h1>

					<h2 id="splash-subheading"> Put your trivia knowledge to the test. </h2>

					<button
						id="start-btn"
						className="btn btn-success action-btn"
						onClick={navigateToQuiz}
					>
						S T A R T
					</button>
					<Footer />
				</div>
			</div>
		</div>
	);
}
