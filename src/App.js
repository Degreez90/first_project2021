import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Red from "./components/pages/Red";
import Data from "./components/pages/Data";
import People from "./components/pages/People";
import Cool from "./components/pages/Cool";
import Wrapper from "./components/main/Wrapper";
import Funko from "./components/main/Funko";
import FirePage from "./components/pages/FirePage";
import coolPerson from "./components/pages/coolPerson";
import Main from "./components/core/final/Main";
import Toy from "./components/core/final/Toy";
import Admin from "./components/core/final/Admin";
import Cart from "./components/core/final/Cart";

function App() {
  return (
      <Router>
          <div className="App">
            <Switch>
                <Route exact path={"/"} component={Main} />
                <Route path={"/cart"} component={Cart} />
                <Route path={"/red/:id"} component={Red} />
                <Route path={"/data"} component={Data} />
                <Route path={"/people"} component={People} />
                <Route path={"/cool"} component={Cool} />
                <Route path={"/product/:details"} component={Toy}/>
                <Route path={"/firepage"} component={FirePage}/>
                <Route path={"/admin"} component={Admin}/>
                {/*<Route path={"/coolperson"} component={coolPerson}/>*/}
            </Switch>
          </div>
      </Router>

  );
}

export default App;
