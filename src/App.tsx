import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Home, Transfer } from 'pages';
import './App.scss';
import Web3 from 'web3';

const getLibrary = (provider: any) => new Web3(provider);

const App = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
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
  </Web3ReactProvider>
);

export default App;
