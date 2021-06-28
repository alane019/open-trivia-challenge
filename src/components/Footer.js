import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer id="footer">
			<hr />
				<Row>
					<Col className="text-center ">
						<i>Totally Awesome Trivia Corp Ltd&copy; 2021 </i>
					</Col>
				</Row>
		</footer>
	);
};

export default Footer;
