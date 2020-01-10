import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/demo.css";
// import '../favicon.ico';
import "./css/style.css";
import "./css/animate-custom.css";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { register } from "../../Redux/Actions/authActions";
import { clearErrors } from '../../Redux/Actions/errorActions'

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    msg: null
  };

  static propTypes = {
    auth: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    const token = this.props.auth.token;

    if (error !== prevProps.error) {
      //check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if(token){
      this.props.history.push('/')
    }
    
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  register = e => {
    e.preventDefault();
  
    const { username, email, password } = this.state;

    //Create User Object
    const newUser = {
      username,
      email,
      password
    };

    this.props.register(newUser);

  

    // setInterval(() => {
    //   this.props.clearErrors()
    // },3000);
  };

  render() {
    // console.log(this.state);
    return (
      <div className="container">
        { this.state.msg ? <div class="alert alert-danger" role="alert">
         {this.state.msg}
        </div>: null}
        <header>
          <h1>Registration Form</h1>
        </header>
        <section>
          <div id="container_demo">
           
            <div id="wrapper">
              <div id="login" className="animate form">
                <form onSubmit={this.register} autoComplete="on">
                  <h1>Register</h1>
                  <p>
                    <label htmlFor="username" className="uname" data-icon="u">
                      Your username
                    </label>
                    <input
                      id="usernamesignup"
                      name="username"
                      required="required"
                      type="text"
                      placeholder="user name"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <label htmlFor="email" className="youmail" data-icon="e">
                      {" "}
                      Your email
                    </label>
                    <input
                      id="emailsignup"
                      name="email"
                      required="required"
                      type="email"
                      placeholder="xyz@mail.com"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <label
                      htmlFor="password"
                      className="youpasswd"
                      data-icon="p"
                    >
                      Your password{" "}
                    </label>
                    <input
                      id="passwordsignup"
                      name="password"
                      required="required"
                      type="password"
                      placeholder="eg. X8df!90EO"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <label
                      htmlFor="password_confirm"
                      className="youpasswd"
                      data-icon="p"
                    >
                      Please confirm your password{" "}
                    </label>
                    <input
                      id="password_confirm"
                      name="password_confirm"
                      required="required"
                      type="password"
                      placeholder="eg. X8df!90EO"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p className="signin button">
                    <input type="submit" value="Sign up" />
                  </p>
                  <p className="change_link">
                    Already a member ?
                    <Link to="/login" className="to_register">
                      Go and log in{" "}
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});
export default connect(
  mapStateToProps,
  { register, clearErrors }
)(SignUp);
