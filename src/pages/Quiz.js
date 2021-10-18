import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

const Quiz = () => {
	const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
	const [score, setScore] = useState(0);
	const [resultHistory, setResultHistory] = useState([]);
	const [displayNextBtn, setDisplayNextBtn] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);
	const [questionCategory, setQuestionCategory] = useState("");
	const [currentQuestion, setCurrentQuestion] = useState("");
	const [correctAnswer, setCorrectAnswer] = useState("");
	const [questions, setQuestions] = useState([]);

	const history = useHistory();
	const triviaData = `https://opentdb.com/api.php?amount=10&type=boolean`;

	const navigateToResults = () => {
		history.push({
			pathname: "/results",
			state: {
				questionCount: questions.length,
				finalScore: score,
				resultHistory: resultHistory,
			},
		});
	};

	function htmlDecode(input) {
		var doc = new DOMParser().parseFromString(input, "text/html");
		return doc.documentElement.textContent;
	}

	const axiosFetchData = (url) => {
		axios
			.get(url)
			.then((res) => {
				let questionsTemp = res.data.results;
				setQuestions(questionsTemp);
				setQuestionCategory(questionsTemp[currentQuestionIdx].category);
				setCurrentQuestion(htmlDecode(questionsTemp[currentQuestionIdx].question));
				setCorrectAnswer(questionsTemp[currentQuestionIdx].correct_answer);
			})
	};

	const displayNextQuestion = () => {
		let decodedQuestion = htmlDecode(questions[currentQuestionIdx].question)
		setQuestionCategory(questions[currentQuestionIdx].category);
		setCurrentQuestion(decodedQuestion);
		setCorrectAnswer(questions[currentQuestionIdx].correct_answer);
	};

	useEffect(() => {
		questions.length < 1 ? axiosFetchData(triviaData) : displayNextQuestion();
	}, [currentQuestionIdx]);

	const handleNextBtn = () => {
		/* diplay results section only after answer submitted.
		 	This section's display is set to none again after
			 the next question is displayed. */
		setDisplayNextBtn(false);
		setShowAnswer(false);
		if (currentQuestionIdx + 1 < questions.length) {
			setCurrentQuestionIdx(currentQuestionIdx + 1);
		} else {
			navigateToResults();
		}
	};

	const handleUserResponse = (userResponse, correctOrIncorrect) => {
		correctOrIncorrect === "Correct" ? setScore(score + 1) : null;

		setResultHistory([
			...resultHistory,
			{
				questionText: currentQuestion,
				userResponse: userResponse,
				isCorrect: correctOrIncorrect === "Correct" ? true : false,
				correctOrIncorrect: correctOrIncorrect,
			},
		]);
		setDisplayNextBtn(true);
		setShowAnswer(true);
	};

	return (
		<div className="quiz-page">
			<Container className="quiz-container center">
			<h1 id="question-category" className="headline"> {questionCategory}</h1> 
				<Row id="question-display-area">
					<div className="question">{currentQuestion}</div>
				</Row>
				<Row
					id="response-button-area"
					style={{ display: showAnswer ? "none" : "block" }}
				>
					<button
						id="true-btn"
						className="btn response-btn btn-outline-info"
						onClick={() =>
							correctAnswer === "True"
								? handleUserResponse("True", "Correct")
								: handleUserResponse("True", "Incorrect")
						}
					>
						{" "}
						True{" "}
					</button>
					<button
						id="false-btn"
						className="btn response-btn btn-outline-info"
						onClick={() =>
							correctAnswer === "False"
								? handleUserResponse("False", "Correct")
								: handleUserResponse("False", "Incorrect")
						}
					>
						{" "}
						False{" "}
					</button>
				</Row>
				<Row id="next-question-button-area">
					{displayNextBtn ? (
						<button
							id="next-btn"
							className="btn btn-outline-success action-btn-secondary"
							onClick={handleNextBtn}
						>
							{" "}
							Continue{" "}
						</button>
					) : (
						""
					)}
				</Row>
				<Row id="result-card-body" className="card-body">
					<Row id="result-display-area">
						{showAnswer ? (
							<div>
								<div
									className={
										resultHistory[currentQuestionIdx].isCorrect
											? "item green"
											: "item red"
									}
								>
									<b>{resultHistory[currentQuestionIdx].correctOrIncorrect}</b>
								</div>
								<p className="question-result">
									{`Your response (${resultHistory[currentQuestionIdx].userResponse})
									was `}{" "}
									{resultHistory[
										currentQuestionIdx
									].correctOrIncorrect.toLowerCase()}
								</p>
							</div>
						) : (
							""
						)}
					</Row>
					<Row id="quiz-progress">
						<p>
							Question {currentQuestionIdx + 1} of {questions.length}{" "}
						</p>
						<p>Score: {score}</p>
					</Row>
				</Row>
			</Container>
		</div>
	);
};

export default Quiz;
