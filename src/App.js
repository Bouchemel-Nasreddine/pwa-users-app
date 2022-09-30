
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes, } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Users from './Users';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>PWA test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link ><Link to="/" >Home</Link></Nav.Link>
                <Nav.Link ><Link to="/users" >Users</Link></Nav.Link>
                <Nav.Link ><Link to="/about" >About</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/users' element={<Users/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
