import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Screens
import Landing from "./react/screens/Landing";
import Suggestions from "./react/screens/Suggestions";

// Styling
import "./App.css";
// import "./from-old-site.css";

class App extends Component {
  render() {
    return (
      <div className="phone">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route exact path={"/:genreId"} component={Suggestions} />
            {/* Not Found */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </div>
      // <div className="App">
      //   <h1>What are you in the mood for?</h1>
      // </div>
    );
  }
}

export default App;
