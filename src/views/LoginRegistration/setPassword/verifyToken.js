import React, { Component } from "react";
import {connect} from 'react-redux'
class VerifyToken extends Component {
  componentDidMount(){
      console.log('working' , this.props.match.params.token);
      
  }
  render() {
    return (
        <>
      {/* // <div className="" style={{boxSizing:'border-box' ,background: 'linear-gradient(to bottom, #181c2d, #1a1f32, #1d2236, #1f263b, #212940)'}}> */}
      <nav
      className="navbar navbar-expand-sm fixed-top navbar-da"
      style={{ backgroundColor: "#555" }}
    >
      
    </nav>
    </>
    );
  }
}

export default connect()(VerifyToken);
