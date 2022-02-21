// import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';
// import ToDoList from './ToDoList';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Intro from './Intro';
// import Navbartab from './Navbartab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Navbartab /> */}
    <Router>
      <div>
        <Switch>
          <Route exact path="/Main">
            <Main />
          </Route>
          <Route exact path="/">
            <Intro />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
