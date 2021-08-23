import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import Question from "./components/Question";
import Home from "./components/Home";
import Results from "./components/Results";
import Register from "./components/Register";
import Admin from "./components/Admin";


function App() {

  return (
    <Router>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
          <img src={process.env.PUBLIC_URL + '/img/Quakestar_280px.png'}
            width="70%" height="70%"         
            className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Start</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link>Admin</Nav.Link>
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
            <Route path="/question/:floor_id/:que_id/:doc_id">
              <Question />
            </Route>
            <Route path="/results/:floor_id/:doc_id">
              <Results />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;