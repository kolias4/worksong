import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { MENU } from '../gql/menu';
import Link from 'next/link'


const Header = ()=> {

  const { loading, error, data } = useQuery(MENU);
  if (error) return <h1>Error</h1>;
  if (loading) return null;

  console.log(data)


    return (
      <div className="header">
        <Navbar   className="my_navbar" expand="lg">
<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" >
  <FontAwesomeIcon style={{color:'white'}}  icon={faBars} size="2x" />
</Navbar.Toggle>
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mx-auto">
  {data.menu.links.map((item) => {
    return (
      <Link href={item.url.path}>
        <a className="nav-link">{item.label}</a>

      </Link>
    )
  })}
  {/* <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#link">Link</Nav.Link> */}

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

// export default Header;
export default withApollo({ ssr: true })(Header);
