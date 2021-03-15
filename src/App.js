import logo from './logo.svg';
import './App.css';
import Rectangle from "./components/core/Rectangle";
import Container from "./components/pages/Container";
import Character from "./components/core/Character";
import Nav from "./components/core/Nav";
import Blocks from "./components/core/Blocks";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Box from "./components/core/Box";
import Red from "./components/pages/Red";
import Data from "./components/pages/Data";
import People from "./components/pages/People";
import Cool from "./components/pages/Cool";


function App() {
  return (
      <Router>
          <div className="App">
            <Nav/>
            <Switch>
                <Route exact path={"/"} component={Blocks} />
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
