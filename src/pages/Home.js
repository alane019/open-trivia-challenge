import React from "react";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

export default function Home() {
	return (
		<Container>
			<h1>Welcome to the React Trivia Challenge</h1>
			<div className="home-page">

				<div className="home-mid"> </div>
				<h2 style={{ marginTop: "10vh" }}>
					Press start to put your trivia smarts to the test.
				</h2>
				<button className="start btn btn-success" style={{ marginTop: "10vh" }}>
					Start Game
				</button>
			</div>
		</Container>
	);
}
