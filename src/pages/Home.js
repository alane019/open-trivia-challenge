import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Home() {
	const history = useHistory();
	const navigateTo = () => history.push("/quiz");


	return (
		<div id="home-container">
			<div className="home-content">
			<div id="home">
			<Header />

					<h1 id="headline">Welcome to React Trivia Challenge</h1>
			
					<h2 id="center-text">
						Press begin to test your trivia knowledge.
					</h2>
		
				<button
					id="start-btn"
					className="start btn btn-success"
					style={{ marginTop: "10vh" }}
					onClick={navigateTo}
					>
					Begin
				</button>
				<Footer />
			</div>
			</div>
		</div>
	);
}
