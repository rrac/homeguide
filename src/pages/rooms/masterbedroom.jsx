import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class MasterBedroom extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col xs="5" sm="5">
						<Image src="/assets/masterbedroom_1.png" thumbnail />
					</Col>
					<Col xs="7" sm="7">
						<p>
							The master bedroom features a queen size, adjustable comfort air mattrass. The fan in the bedroom is
							controlled by a switch behind the bedroom door. The armoire includes a TV set that receives all the
							channels as in the family room. It has built in Netflix and Amazon Apps linked too our accounts. Use the
							Vizio controller to switch to the built-in apps. Select "Input" on that controller to return to TV mode
							and then select HDMI1.{' '}
						</p>
						<p>
							The bedroom has a small, narrow squeeze-in closet. The door is to the right of the en-suite master
							bathroom.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs="5" sm="5">
						<Image src="/assets/masterbedroom_2.png" thumbnail />
					</Col>
					<Col xs="7" sm="7">
						<p>The bedroom has an en-suite bathroom.</p>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default MasterBedroom;
