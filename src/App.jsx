import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Buttonpage from './components/button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardpage from './components/cardpage';
import Alertpage from './components/alertpage';
import Modalpage from './components/modalpages';
import Login from './components/loginpage';
import Forgot from './components/Forgotpage';
import Reset from './components/resetpage';
import Notpage from './components/notpage';
import Blankpage from './components/blankpage';
import Tablepage from './components/tablepage';
import Dashboard from './components/dashboard';

function App() {


  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/button">
          <Buttonpage />
        </Route>
        <Route path="/card">
          <Cardpage />
        </Route>
        <Route path="/table">
          <Tablepage />
        </Route>

        <Route path="/alert">
          <Alertpage />
        </Route>

        <Route path="/modals">
          <Modalpage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/forgot">
          <Forgot />
        </Route>

        <Route path="/reset">
          <Reset />
        </Route>

        <Route path="/notpage">
          <Notpage />
        </Route>

        <Route path="/blankpage">
          <Blankpage />
        </Route>
      </Switch>
    </>
  )
}

export default App
