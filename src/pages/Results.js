import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

const Results = (props) => {
	const location = useLocation();
	const history = useHistory();
	const [finalScore, setFinalScore] = useState(0);
	const [questionCount, setQuestionCount] = useState(0);
	const [resultHistory, setResultHistory] = useState(0);
	const [mapData, setMapData] = useState(false);

	const navigateToStartScreen = () => history.push("/");

	useEffect(() => {
		if(location.state){
			setFinalScore(location.state.finalScore);
			setQuestionCount(location.state.questionCount);
			setResultHistory(location.state.resultHistory);
		}

		else{
			history.push("/");
		}
	 }, []);



  return (
	  <div>
	 <Header />
	 <Container>
		<div id="results">
			<h1>Results</h1>
			<div id="center-text">
				<p> {finalScore}  of {questionCount} responses were correct.</p>
			</div>
			<div>
				<div>
		
				</div>		
				</div>
				<button 
					id="action-btn" 
					className="btn btn-success action-btn"
					onClick={navigateToStartScreen}>
					Play again?
				</button>
		</div>
	 </Container>
	 <Footer />
	 </div>
  );
}

export default Results;
