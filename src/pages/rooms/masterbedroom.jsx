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
							To operate the fan in the bedroom if it gets too hot, but maybe not hot enough to use the air conditioning
							... turn on the controls that can be found behind the entrance door, between the book case and the door to
							the right inside the bedroom. It creates a nice breeze and is not too loud. The armoire contains a few
							drawers with clothing and a TV set that receives all the channels as in the family room. It has built in
							Netflix and Amazon Apps linked too our accounts. Use the Vizio controller to switch to the built-in apps.
							Select "Input" on that controller to return to TV mode and then select HDMI1.{' '}
						</p>
						<p>
							If you keep the wood shutters closed most of the day so the room is dark, it will actually stay very cool
							in there (summer time hint).
						</p>
						<p>
							The bedroom has a small, narrow walk-in closet. The door is to the right of the en-suite master bathroom.
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
