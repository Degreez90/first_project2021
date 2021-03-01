import logo from './logo.svg';
import './App.css';
import Nav from "./components/core/Nav";
import Rectangle from "./components/core/Rectangle";
import Block from "./components/core/Block";
import Block2 from "./components/core/Block2";
import Box from "./components/core/Box";
import Box1 from "./components/core/Box1";
import Box2 from "./components/core/Box2";


function App() {
  return (
    <div className="App">
        <Box/>
        <Rectangle/>
        <Rectangle/>
        <Rectangle/>
        <Block  color={"green"} border={"white"}/>
        <Block  color={"red"} border={"yellow"}/>
        <Block  color={"blue"} border={"green"}/>
        <Block2 color={"green"} border={"red"}/>
        <Block2 color={"green"} border={"red"}/>
        <Block2 color={"green"} border={"red"}/>
    </div>
  );
}

export default App;
