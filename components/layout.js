import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'

class Layout extends Component {

  render() {
    return (
      <div>

      <Header/>
      <main className="maincontent">
      {this.props.children}
      </main>
      <Footer/>

      </div>
    );
  }

}

export default Layout;
