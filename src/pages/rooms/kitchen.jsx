import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class Kitchen extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col xs="5" sm="5">
						<Image src="/assets/kitchen_1.png" thumbnail />
					</Col>
					<Col xs="7" sm="7">
						<p>
							The updated kitchen includes a BlueStar gas range with oven, a GE Microwave, a GE Electric oven, a
							Sub-Zero refrigerator and freezer, a Miele dishwasher and GE Trash Compactor. To the right of the sink you
							will find a small controller that controls the lights under the cupboards. Just step back a little into
							the middle of the room, point the controller to each set of cabinets to operate the lights. If you like to
							play around with mood lighting, you can change the intensity and/or the color of the lights. The hood, has
							2 vent motors and the middle switch is for the lights. In the bottom drawer under the electric oven you
							will find some French baking silpats for baking cookies or any other stuff on a metal baking sheet.
						</p>
						<p>
							The kitchen has everything to comfortably cook about anything you can come up with. If you are into
							"sous-vide" cooking, I have an induction plate that can keep the temperature of the water in a large pot
							very precise. Plug in the plate; push start; put a pot filled with water on top; activate the temperature
							probe by holding the side button 3 secs. Lower the probe end into the water and sling it over the side of
							the pot. You will feel the magnet in the broad end of the probe attache to the side of the pot. Adjust to
							the required temperature for the food you are cooking. If you are interested in experimenting with it,
							please don't hesitate to use it. The device to pull the air out of plastic bags as if you were freezing an
							item are in the cupboard next to the oven and microwave. Submerge the airless bag(s) in the pot of water
							that has reached the required temperature. Use a timer to alert you when the food has finished cooking.
							There are many sites on the internet that discuss sous-vide. Easy for steaks and fish and always done
							exactly right. You can then just use one of the iron skillets to quickly brown meats or crust fish.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs="5" sm="5">
						<Image src="/assets/kitchen_2.png" thumbnail />
					</Col>
					<Col xs="7" sm="7">
						<p>
							Coffee - there are 3 alternatives here. Don't be daunted by the coffee machine, it looks complicated, but
							it can be mastered fairly easily. A brief guide for the machine and the grinder is in a folder in the
							basket on the component cabinet. The other alternative is the French Coffee Press. It is in the cupboard
							to the left of the hood. We also have a Nespresso system in case you wanted to use it - please carefully
							look at the markings on the coffee pods, we have (3) different sizes - expresso for the small cups and a
							5/7 oz size of the larger cups.
						</p>
						<p>
							The electric oven is much faster than the gas oven, it allows for a much higher temperature and is much
							more stable. Above the electric oven is a micro-wave.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs="5" sm="5">
						<Image src="/assets/kitchen_3.png" thumbnail />
					</Col>
					<Col xs="7" sm="7">
						<p>
							The Miele dishwaher is easy to use. The dishwasher has 3 pull out trays, top is for cutlery and silver,
							middle is for cups, saucers, glasses, desert dishes, etc ... the bottom is for larger dishes, pots and/or
							pans and anything that does not fit in any of the (2) top ones. The right most button is the on button,
							you press it and in the little read-out window on the left it will show a total time it will run, just
							close it and it will start running. You can open it at any time and add or remove stuff, close it and it
							will continue to run.
						</p>
						<p>
							The dishwasher soap packets are under the sink in a box with a blue lid (Costco). There should be enough
							salt and rinser in the system so use it as much as you want. In the event you see a notification in the
							small read-out on the left top of the door for either Rinse Solution or Salt Replenishing ... you can
							override the message by turning the appliance off and then back on. Rinse solution is under the sink, salt
							to replenish the dishwasher is behind the louvre door in the first part of the hallway. They are Miele
							grey boxes, the funnel shaped device to aid pouring the salt into the bottom of the dishwasher under the
							lower basket is next to the boxes of salt.
						</p>
						<p>
							All dishes, glasses etc ... are in the cupboards facing the outside of the house (sink side). The
							stainless steel cutlery is in the drawer left of the stove. The silver is in the small sideboard in the
							eating nook, right hand drawer. Additional silver is in lined boxes on top of the sideboard. There is a
							picnic basket on top also in case you want to head to the beach or grassy knolls above the beach on Ocean
							... or anywhere else. The two larger drawers in the kitchen opposite the sink have all the kitchen gadgets
							you probably need. From spatulas to cheese cutters, to ice cream scoops to peelers, bottle openers and can
							openers etc ...
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs="5" sm="5">
						<Image src="/assets/kitchen_4.png" thumbnail />
					</Col>
					<Col xs="7" sm="7">
						<p>
							The kitchen garbage compactor sits to the right of the stove. Step on the pedal at the bottom to slide it
							open. We store a recycling container under the sink; you need to pull out the large drawer to get to the
							top of the container.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs="5" sm="5">
						<Image src="/assets/kitchen_5.png" thumbnail />
					</Col>
					<Col xs="7" sm="7">
						<p>
							The sink has a garbage disposal. With the water running, use the switch to the right of the window to run
							the disposal (like macerator for Brits or sailors). Try not to put items in there like potato peels or
							large pieces of fruit and vegetables.
						</p>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Kitchen;
