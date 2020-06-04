import React, { Component } from 'react';


class Header extends Component {

  render() {
    return (
      <div className="header">

       <div className="jumbotron masthead">


      <div className="navbar navbar-fixed-top navbar-absolute">
  <div className="navbar-inner">
    <div className="container">
      <a
        className="btn btn-navbar"
        data-toggle="collapse"
        data-target=".nav-collapse"
      >
        {" "}
        <span className="icon-bar" /> <span className="icon-bar" />{" "}
        <span className="icon-bar" />{" "}
      </a>
      {/* <a className="brand" href="#">
        {" "}
        <img style={{width:'100px',height:'50px'}} src="/underconstruction.png" alt="logo" />
      </a> */}
      <div className="nav-collapse collapse">
        <ul className="nav pull-right">
          <li className="active">
            <a href="#home">UNDER CONSTRUCTION</a>
          </li>
          {/* <li>
            <a href="#events">EVENTS</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#gallery">GALLERY</a>
          </li>
          <li>
            <a href="#media">MEDIA</a>
          </li>
          <li>
            <a href="#audio">AUDIO</a>
          </li>
          <li>
            <a href="#newsletter">SUBSCRIBE</a>
          </li>
          <li className="dropdown">
            {" "}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              PAGES <b className="caret" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="blog.html" target="_blank">
                  BLOG LIST
                </a>
              </li>
              <li>
                <a href="blog-post.html" target="_blank">
                  SINGLE BLOG PAGE
                </a>
              </li>
              <li>
                <a href="404.html" target="_blank">
                  404 PAGE
                </a>
              </li>
              <li>
                <a href="soon.html" target="_blank">
                  COMING SOON
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
</div>

  {/* <div className="headermessage">

    <h1>JKSDJFK</h1>


  </div> */}


</div>

<style jsx > {
  `
    .headermessage {
      color:black;
      position:absolute;
      top:200px;
      left:0;
      right:0;
      text-align:center;


    }

  `
}


</style>

</div>



    );
  }

}

export default Header;
