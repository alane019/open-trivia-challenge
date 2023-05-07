import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer id="footer">
			<hr />
				<Row>
					<Col className="text-center ">
						<div>Thanks to Open Trivia Database &nbsp;- &nbsp; 
							<a href="https://opentdb.com/"
							rel="noopener" target="_blank"
							className="otdb-link"> 
							 https://opentdb.com/ </a>  </div> <br/>
							<div><i>&copy; 2021 Adam Lane </i></div> 
					</Col>
				</Row>
		</footer>
	);
};

export default Footer;
