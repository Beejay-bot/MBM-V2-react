import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from './components/Contact'


import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhone,faPhoneAlt,faInfoCircle, faEnvelope, faStopCircle, faPrint, faMotorcycle, faPaperPlane, faLink, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import Mug from './components/Mug'
import Bottles from './components/Bottle'

library.add(fab,faPhoneAlt,faLink,faQuoteLeft,faQuoteRight, faPhone, faInfoCircle, faEnvelope, faStopCircle, faPrint, faMotorcycle, faPaperPlane);

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/mug" component={Mug} />
          <Route exact path="/bottle" component={Bottles} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
