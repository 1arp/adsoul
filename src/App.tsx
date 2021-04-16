import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import { AppDetails } from './pages/AppDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/app/:id">
          <AppDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
