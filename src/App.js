import logo from './logo.svg';
import './App.css';
import Nav from "./components/core/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Box from "./components/core/Box";
import Red from "./components/pages/Red";
import Data from "./components/pages/Data";
import People from "./components/pages/People";
import Cool from "./components/pages/Cool";
import Block from "./components/core/Block";
import Container2 from "./components/pages/Container2";

function App() {
  return (
      <Router>
          <div className="App">
            <Switch>
                <Route exact path={"/"} component={Container2} />
                <Route path={"/red/:id"} component={Red} />
                <Route path={"/data"} component={Data} />
                <Route path={"/people"} component={People} />
                <Route path={"/cool"} component={Cool} />
            </Switch>
          </div>
      </Router>

  );
}

export default App;
