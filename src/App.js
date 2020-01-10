import React, { Component } from "react";
import Template from "./views/Template";
// import Login from "./views/LoginRegistration/login";
// import SignUp from "./views/LoginRegistration/Signup";
// import "./bootstrap.css";
// import chartWithZoom from "./views/overview/Chart with Zoom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loaduser } from "./Redux/Actions/authActions";
import store from "./Redux/Store";
import BlogDetails from "./views/overview/blogDetail";
import {connect} from "react-redux";
import ForgotPassword from './views/LoginRegistration/forgotPw/forgotpw'
import ErrPage from './views/LoginRegistration/forgotPw/ErrPage'
import NewPassword from './views/LoginRegistration/setPassword/setPassword' ;
// import setPassword from "./views/LoginRegistration/setPassword/setPassword";
// import './App.css';
import VerifyToken from './views/LoginRegistration/setPassword/verifyToken' ;


class App extends Component {
  componentDidMount() {
    store.dispatch(loaduser());
    fetch("http://localhost:5000/getBlogs")
      .then(data => data.json())
      .then(data => {
        if (data.success) {
          this.setState({
            blogs: data.data
          })
          this.props.dispatch({type:"ADD_BLOGS",payload:data.data});
        }
        // alert("done")
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Template} />
            <Route exact path="/:fid/:sid" component={BlogDetails}/>
            <Route exact path="/forgot_password" component={ForgotPassword}/>
            
            {/* <Route exact path='/token_verification/:token' component={VerifyToken} /> */}
            <Route exact path="/set_new_password" component={NewPassword} />
            <Route exact path="/token_err" component={ErrPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
