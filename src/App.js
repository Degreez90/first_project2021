import logo from './logo.svg';
import './App.css';
import Nav from "./components/core/Nav";
import Box from "./components/core/Box";
import Box1 from "./components/core/Box1";
import Box2 from "./components/core/Box2";


function App() {
  return (
    <div className="App">
        <Nav/>
      <Box1/>
      <Box2 name={"Jake"} age={21} color={"teal"} />
      <Box2 name={"Taylor"} age={26} color={"blue"}/>
      <Box2 name={"Chris"} age={24} color={"red"} />
    </div>
  );
}

export default App;
