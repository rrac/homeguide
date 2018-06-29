import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNav from "./components/nav";
import Home from "./pages/home";
import Us from "./pages/us";
import Access from "./pages/rooms/access";
import Hallway from "./pages/rooms/hallway";
import FamilyRoom from "./pages/rooms/familyroom";
import Dining from "./pages/rooms/dining";
import Kitchen from "./pages/rooms/kitchen";
import MasterBedroom from "./pages/rooms/masterbedroom";
import MasterBathroom from "./pages/rooms/masterbathroom";
import BedroomTwo from "./pages/rooms/bedroomtwo";
import BedroomThree from "./pages/rooms/bedroomthree";
import BathroomTwo from "./pages/rooms/bathroomtwo";
import Garage from "./pages/rooms/garage";
import Contacts from "./pages/contacts";
import Locations from "./pages/locations";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNav />
          <Route exact path="/" component={Home} />
          <Route path="/pages/us" component={Us} />
          <Route path="/pages/rooms/access" component={Access} />
          <Route path="/pages/rooms/hallway" component={Hallway} />
          <Route path="/pages/rooms/familyroom" component={FamilyRoom} />
          <Route path="/pages/rooms/dining" component={Dining} />
          <Route path="/pages/rooms/kitchen" component={Kitchen} />
          <Route path="/pages/rooms/masterbedroom" component={MasterBedroom} />
          <Route path="/pages/rooms/masterbathroom" component={MasterBathroom} />
          <Route path="/pages/rooms/bedroomtwo" component={BedroomTwo} />
          <Route path="/pages/rooms/bedroomthree" component={BedroomThree} />
          <Route path="/pages/rooms/bathroomtwo" component={BathroomTwo} />
          <Route path="/pages/rooms/garage" component={Garage} />
          <Route path="/pages/contacts" component={Contacts} />
          <Route path="/pages/locations" component={Locations} />
        </div>
      </Router>
    );
  }
}

export default App;
