import "./App.css";
import LayOut from "./layout/LayOut";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Aboutpage from "./containers/Aboutpage";
import Message from "./containers/Message";
import Listings from "./containers/Listings";
import ListingDetails from "./containers/ListingDetails";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import NotFoundException from "./components/NotFoundException";
import React from "react";
import PrivateRoute from "./components/privateRoute";

import "./sass/main.scss";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <LayOut>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutpage" component={Aboutpage} />
            <Route exact path="/message" component={Message} />
            <Route exact path="/listings" component={Listings} />
            <PrivateRoute
              exact
              path="/ListingDetails/:id"
              component={ListingDetails}
            />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route component={NotFoundException} />
          </Switch>
        </LayOut>
      </Router>
    </Provider>
  );
};

export default App;
