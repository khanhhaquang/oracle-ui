import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Transfer } from 'pages';
import "./App.scss"

const App = () => (
  <Router>
    <Switch>
      <Route exact path={'/' || '/home'}>
        <Home />
      </Route>
      <Route exact path='/transfer'>
        <Transfer />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
