import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'


class Header extends Component {

  render() {
    return (
      <div className="header">
        <Navbar   className="my_navbar" expand="lg">
<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mx-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#link">Link</Nav.Link>
  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>
</Nav>

</Navbar.Collapse>
</Navbar>




        <style jsx global  > {
          `
           .my_navbar {
             background:#080c19;
             color:white;
           }

           .my_navbar .navbar-nav .nav-link {
    color: #fff;
    text-transform: uppercase;
    text-shadow: none;
    &:hover {
        color:grey;
    }
   }

          `
        }


        </style>




    </div>







    );
  }

}

export default Header;
