import './css/App.css';
import Home from './contents/Home'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Sin from './contents/Second'
import Insure from './contents/Insure'
import Status from './contents/Status'

function App() {
  return (
    <Router>
      <Redirect from="/" to="/home" />
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/secondhand">
        <Sin/>
      </Route>
      <Route exact path="/ensurance">
        <Insure/>
      </Route>
      <Route exact path="/status">
        <Status/>
      </Route>
    </Router>
  );
}

export default App;
