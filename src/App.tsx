import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Web3Provider from 'web3-react';
import { Home, Transfer } from 'pages';
import './App.scss';
import connectors from 'connectors';

const App = () => (
  <Web3Provider connectors={connectors} libraryName={'ethers.js' || 'web3.js' || null}>
    <Router>
      <Switch>
        <Route exact path={'/' || '/home'}>
          <Home />
        </Route>
        <Route exact path="/transfer">
          <Transfer />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  </Web3Provider>
);

export default App;
