import React, { Component } from "react";
import { Link, NavLink, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  
  render() {
    return (
        <>
      {/* // <div className="" style={{boxSizing:'border-box' ,background: 'linear-gradient(to bottom, #181c2d, #1a1f32, #1d2236, #1f263b, #212940)'}}> */}
      <nav
      className="navbar navbar-expand-sm fixed-top navbar-da"
      style={{ backgroundColor: "#555" }}
    >
      <div className="container my-margin">
        <h4>
          <Link
            to="/"
            className="text-light nav-link "
            style={{ fontWeight: "700", fontSize: "24px" }}
          >
            ethereumprice
          </Link>
        </h4>
        <button
          className="navbar-toggler float-right"
          style={{ color: "red" }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white btn btn-primary bg-white" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              {" "}
              <button
                className="btn btn-sm text-white active"
                onClick={() => this.setState({ value: 100 })}
              >
                1hr
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm active text-white"
                onClick={() => this.setState({ value: 200 })}
              >
                12hr
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm text-white active"
                onClick={() => this.setState({ value: 300 })}
              >
                24hr
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm text-white"
                onClick={() => this.setState({ value: 500 })}
              >
                1w
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm text-white"
                onClick={() => this.setState({ value: 600 })}
              >
                1m
              </button>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="btn btn-sm text-white"
                onClick={() => this.setState({ value: 700 })}
              >
                3m
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm text-white"
                onClick={() => this.setState({ value: 800 })}
              >
                1y
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm text-white"
                onClick={() => this.setState({ value: 1000 })}
              >
                All
              </button>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto d-inline">
            <li className="nav-item d-inline">
              <button className="btn btn-dark">LIVE</button>
            </li>
            <li className="nav-item d-inline">
              <button className="btn btn-light ml-2">BUY ETHEREUM</button>
            </li>
            {/* <li className="nav-item d-inline"><button class=" btn" onClick={this.openNav}><i class="fas fa-ellipsis-h fa-rotate-90 fa-inverse" style={{fontSize:'10'}}></i></button> </li> */}

            {/* {isAuthenticated ? authLinks : guestLinks} */}
          </ul>
          {/* <div id="mySidepanel" className="sidepanel text-white bg-dark">
                <a href="javascript:void(0)" className="closebtn text-white" style={{border:'none'}} onClick={this.closeNav}>×</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/augur.png" alt=" icon"/>Augur</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/bitcoin.png" alt=" icon"/>Bitcoin</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/digix.png" alt=" icon"/>Digix</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/ethereum.png" alt=" icon"/>Ethereum</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/ethereumclassic.png" alt=" icon"/>Ethereum Classic</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/eos.png" alt=" icon"/>EOS</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/gnosis.png" alt=" icon"/>Gnosis</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/golem.png" alt=" icon"/>Golem</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/litecoin.png" alt=" icon"/>Litcoin </a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/monero.png" alt=" icon"/>Ethereum</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/neo.png" alt=" icon"/>NEO</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/ripple.png" alt=" icon"/>Ripple</a>
                <a href="#"><img src="https://ethereumprice.org/wp-content/themes/ethereumprice/assets/images/icons/coins/taas.png" alt=" icon"/>Taas</a>
            </div> */}
        </div>
      </div>
    </nav>
    </>
    );
  }
}

export default connect()(Header);
