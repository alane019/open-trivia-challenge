import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

const Results = () => {

	const location = useLocation();
	const history = useHistory();

	const [finalScore, setFinalScore] = useState(0);
	const [questionCount, setQuestionCount] = useState(0);
	const [resultHistory, setResultHistory] = useState([]);

	const navigateToStartScreen = () => history.push("/");

	useEffect(() => {

			setFinalScore(location.state.finalScore);
			setQuestionCount(location.state.questionCount);	
			setResultHistory(location.state.resultHistory);
	 }, []);


  return (
	  <div id="results-page">
	 <Header />
	 <Container>
		<div id="results">
			<h1 className="headline">Results</h1>
			<div id="score">
				<p> {finalScore}  of {questionCount} responses were correct.</p>
				<p className={( finalScore / questionCount < .5 ?
					 "percent red" : "percent")} >
					 {( Math.round((finalScore / questionCount) * 100))} %
				</p>
			</div>
			<div id="detailed-result-listing">

				<ol>	
					{resultHistory.map((result, i) => (
						<li className="answer-summary-input" key={i}>
														<div className="question-text">
								{result.questionText}
						</div>
						<div className={(result.isCorrect ? "item green" : "item red") }>
								{result.correctOrIncorrect}
						</div>

						</li> 
					))}
				</ol>
			
			</div>
				<button 
					id="restart-btn" 
					className="btn btn-success action-btn"
					onClick={navigateToStartScreen}>
					PLAY AGAIN
				</button>
		</div>
	 </Container>
	 <Footer />
	 </div>
  );
}

export default Results;
