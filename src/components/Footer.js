import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer id="footer">
			<hr />
				<Row>
					<Col className="text-center ">
						<div> Trivia questions provided by 
							  Open Trivia Database API &nbsp;- &nbsp; 
							<a href="https://opentdb.com/"
							rel="noopener" target="_blank" 
							> https://opentdb.com/ </a>  </div> <br/>
							<div><i>&copy; 2021 Adam Lane </i></div> 
					</Col>
				</Row>
		</footer>
	);
};

export default Footer;
