import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../../Redux/Actions/authActions";
import { clearErrors } from "../../../Redux/Actions/errorActions";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  // ModalHeader,
  ModalBody,
  // ModalFooter,
  // Form,
  // FormGroup,
  // Label,
  // Input,
  // FormText,
  Alert
} from "reactstrap";
import "./style.css";
// import avatar from "./images/hr.png";

class LoginModal extends Component {
  state = {
    modalOpen: false,
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
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    fetch('/getBlogs', {
      method: 'GET',
    }).then((res) => {
      return res.json();
    }).then((res) => {
      // console.log(res)
    })
    // const { error } = this.props;

    // if (error !== prevProps.error) {
    //   //check for register error
    //   if (error.id === "REGISTER_FAIL") {
    //     this.setState({ msg: error.msg.msg });
    //   }
    //   else {
    //     this.setState({ msg: null });
    //   }
    // }
  }

  handleChange = evt => {


    this.setState({
      [evt.target.name]: evt.target.value
    });

  };

  handleSignup = e => {
    e.preventDefault();


    const { username, email, password } = this.state;

    //Create User Object
    const newUser = {
      username,
      email,
      password
    };

    this.props.register(newUser);

    this.setState({
        username:'',
        email:'',
        password:'',
        password_confirm:''
    })
  };

  toggle = () => {
    //Clear Error
    this.props.clearErrors();
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };
  render() {
    // console.log(this.state);
    const { username, email, password, password_confirm } = this.state
    return (
      <div>
        <Button type="button" color="secondary" onClick={this.toggle} className="btn bg-dark btn-outline-dark text-white pl-2" style={{ fontSize: "12px", borderRadius: "5px 0px 0px 5px" }}>
          Sign Up
        </Button>
        <Modal
          isOpen={this.state.modalOpen}
          toggle={this.toggle}
          className={this.props.className}

        >
          {/* <ModalHeader toggle={this.toggle}>Register Form</ModalHeader> */}
          <ModalBody
            style={{ backgroundColor: '#666' }}
          >
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}

            <div className="signup-wrap">
              <div className="signup-html">


                {/* <input id="tab-2" type="radio" name="tab" className="sign-up" checked /> */}
                <labe for="tab-2" className="tab">
                  Sign Up
                </labe>
                <div className="signup-form">

                  <form onSubmit={this.handleSignup}>
                    <div className="sign-up-htm">
                      <div className="group">
                        <label for="user" className="label">
                          Username
                        </label>
                        <input
                          id="user"
                          type="text"
                          className="input"
                          name="username"
                          required
                          onChange={this.handleChange}
                          value={username}
                        />
                      </div>
                      <div className="group">
                        <label for="pass" className="label">
                          Email Address
                        </label>
                        <input
                          id="pass"
                          type="email"
                          className="input"
                          name="email"
                          required
                          onChange={this.handleChange}
                          value={email}
                        />
                      </div>
                      <div className="group">
                        <label for="pass" className="label">
                          Password
                        </label>
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          name="password"
                          required
                          onChange={this.handleChange}
                          value={password}
                        />
                      </div>
                      <div className="group">
                        <label for="pass" className="label">
                          Confirm Password
                        </label>
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          name="password_confirm"
                          onChange={this.handleChange}
                          value={password_confirm}
                          onBlur={() => {
                            if (this.state.password !== this.state.password_confirm) {
                              this.setState({
                                msg: "Err: Password didn't match."
                              })
                            }else{
                              this.setState({
                                msg: ""
                              })
                            }
                          }}
                        />
                        
                      </div>
                      <div className="group">
                        <button className="button">Sign Up</button>
                      </div>
                      <div className="hr" />
                      <div className="foot-lnk">
                        <label for="tab-1" className='chck'>Already Member?</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </ModalBody>
          
        </Modal>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors, }
)(LoginModal);
