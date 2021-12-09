import './css/App.css';
import Home from './contents/Home'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Second from './contents/Second'
import Status from './contents/Status'
import Login from './contents/Login'
import Signup from './contents/Signup'
import Profile from './contents/Profile'
import AdminDashboard from './contents/AdminDashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/secondhand">
          <Second />
        </Route>
        <Route path="/status">
          <Status />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/dashboard">
          <AdminDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
