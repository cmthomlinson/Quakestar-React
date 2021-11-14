import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'

import Question from "./components/Question";
import Home from "./components/Home";
import Register from "./components/Register";
import Admin from "./components/Admin";
import Floorque from './components/Floorque';
import Record from './components/Record';

import './style.css'

function App() {

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">QuakeStar</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>HouseCheck</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/record">
              <Nav.Link>myHouseCheck</Nav.Link>
            </LinkContainer>
            <LinkContainer className="mr-sm-2" to="/admin">
              <Nav.Link>Admin login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <div className="App">
        <div className="content">
          <br />
          <br />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/floorque/">
              <Floorque/>
            </Route>
            <Route path="/question/:floor_id/:que_id/:doc_id">
              <Question />
            </Route>
            <Route path="/record">
              <Record/>
            </Route>
            <Route path="/admin">
              <Admin />
            <Route/>

            </Route>
          </Switch>

        </div>
      </div>
      <br />
      
    </Router>
  );
}

export default App;