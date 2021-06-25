import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<Container>
			<hr />

				<Row>
					<Col className="text-center py-3">
						<i> Copyright &copy; React Trivia Challenge</i>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
