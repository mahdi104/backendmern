import { Switch, Route } from "react-router";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import NavBar from "./Components/NavBar/NavBar";
import Errors from "./Pages/Errors";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddContact} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
