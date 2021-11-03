import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plants from './components/Plants';
import Store from './components/Store';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/plants">
            <Plants />
          </Route>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route exact path="/details/:name">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
