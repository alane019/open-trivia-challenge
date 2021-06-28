import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';

const questions = [
		  {
			"category": "Vehicles",
			"type": "boolean",
			"difficulty": "hard",
			"question": "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
			"correct_answer": "True",
			"incorrect_answers": [
			  "False"
			]
		  },
		  {
			"category": "Entertainment: Music",
			"type": "boolean",
			"difficulty": "hard",
			"question": "The song &quot;Mystery Train&quot; was released by artist &quot;Little Junior&#039;s Blue Flames&quot; in 1953.",
			"correct_answer": "True",
			"incorrect_answers": [
			  "False"
			]
		  },
		  {
			"category": "Entertainment: Video Games",
			"type": "boolean",
			"difficulty": "hard",
			"question": "The names of Roxas&#039;s Keyblades in Kingdom Hearts are &quot;Oathkeeper&quot; and &quot;Oblivion&quot;.",
			"correct_answer": "True",
			"incorrect_answers": [
			  "False"
			]
		  },
	];

function Quiz() {
	const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
	const [score, setScore] = useState(0);
	const [ resultHistory, setResultHistory] = useState([]);
	const [ displayNextBtn, setDisplayNextBtn] = useState(false);
	const [ showAnswer, setShowAnswer] = useState(false);
	const [ questionCategory, setQuestionCategory] = useState("");
	const [ currentQuestion, setCurrentQuestion] = useState("");
	const [ correctAnswer, setCorrectAnswer] = useState("");
	
	const history = useHistory();
	
	const navigateToResults = () => history.push(
		{
			pathname: '/results',
			state: { 
				questionCount: questions.length,
				finalScore: score,
				resultHistory: resultHistory,
			}
		}
	);

		
	useEffect(() => {
		console.log("useEffect: Question index update (or initial component load)")
		setQuestionCategory(questions[currentQuestionIdx].category);
		setCurrentQuestion(questions[currentQuestionIdx].question);
		setCorrectAnswer(questions[currentQuestionIdx].correct_answer);

	 }, [currentQuestionIdx]);

	const handleNextBtn = () => {
		/* diplay results section only after answer submitted.
		 	This section's display is set to none again after
			 the next question is displayed. */
		setDisplayNextBtn(false);
		setShowAnswer(false);
		if ((currentQuestionIdx + 1) < questions.length) {
			setCurrentQuestionIdx(currentQuestionIdx + 1);
		} else {
			navigateToResults();
		}
	}

    const handleUserResponse = (userResponse, correctOrIncorrect) => {
		correctOrIncorrect === "Correct" ? setScore(score + 1) : null;
		let responseDetails = {
			questionText: currentQuestion,
			userResponse: userResponse,
			correctOrIncorrect: correctOrIncorrect,
		}

        setResultHistory([...resultHistory, responseDetails]);
		setDisplayNextBtn(true);
		setShowAnswer(true);
    };

	return (
				<div className="quiz-page">
				<Container className="quiz-container"> 
					<h2 id="headline">Question Category: {questionCategory}</h2>

					<Row id="question-display-area">
						<div className="question">
							{currentQuestion}
						</div>
					</Row>
					<Row id="response-button-area"  style={{ display: showAnswer ? "none" : "block" }}>
						<button id="true-btn" className="btn response-btn btn-outline-info"
						onClick={() => correctAnswer === "True" ? 
									handleUserResponse( "True","Correct")
									: handleUserResponse("True", "Incorrect")
						} > True </button>
						<button id="false-btn" className="btn response-btn btn-outline-info"

						onClick={() => correctAnswer  === "False" ?
								handleUserResponse("False", "Correct") 
								: handleUserResponse("False", "Incorrect")
						}> False </button>
					</Row>
					<Row id="next-question-button-area" >
						{displayNextBtn ? <button id="next-btn" className="btn btn-outline-success action-btn-secondary"
						 onClick={handleNextBtn}> Continue </button> : ""}
					</Row>

					<Row id="result-display-area">
						{  showAnswer ? <div>
							<p><b>{resultHistory[currentQuestionIdx].correctOrIncorrect}</b></p>
							<p className="question-result">  Your response: &nbsp; <b>{resultHistory[currentQuestionIdx].userResponse}  </b> 	 {" "}
							was {resultHistory[currentQuestionIdx].correctOrIncorrect}. </p>  </div> : "" 
						}
					</Row>
					<Row id="quiz-progress">
							<p>Question {currentQuestionIdx + 1 } of {questions.length}  </p> 
							<p>Score: {score}</p>
					</Row>	
				</Container>
				</div>
	);
}

export default Quiz;
