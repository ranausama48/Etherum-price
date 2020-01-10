import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { login } from '../../../Redux/Actions/authActions'
import { clearErrors } from '../../../Redux/Actions/errorActions'
import { forgotPassword} from '../../../Redux/Actions/authActions'
import {Link} from 'react-router-dom'
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
  Alert
} from "reactstrap";
import './style.css';

class LoginModal extends Component {
  state = {
    modalOpen: false,
    email: "",
    password: "",
    msg:null
  };

  static propTypes = {
    auth: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    // const token = this.props.auth.token;


    if (error !== prevProps.error) {
      //check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });

      }
    }
    // if(token) {
    //   this.props.history.push('/')
    // }
  }

  handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    })
}
handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    // email = this.state.email
  
    const user = {
      email,
      password
    }
    this.props.login(user);

    this.setState({
    email: '',
    password:''
    })
  };
  toggle = () => {
      //Clear Error
      this.props.clearErrors()
      
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };
  forgotPw = () => {
    // this.props.forgotPassword(this.state)
   
  }
  render() {
      const { email, password } = this.state
    return (
      <div>
        <Button type ="button" color="secondary" onClick={this.toggle} className="btn btn-outline-dark bg-dark text-white " style={{fontSize:"12px", borderRadius:"0 5px 5px 0"}}>
          Login
        </Button>
        <Modal
          isOpen={this.state.modalOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          {/* <ModalHeader toggle={this.toggle}>Login Form</ModalHeader> */}
          <ModalBody
          style = {{ backgroundColor:'#666'}}
          >
          { this.state.msg ? <Alert color = "danger">{ this.state.msg}</Alert>: null}

          <div className="login-wrap">
              <div className="login-html">
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  checked
                />
                <label for="tab-1" className="tab">
                  Sign In
                </label>
                {/* <input id="tab-2" type="radio" name="tab" className="sign-up" /> */}
                <label for="tab-2" className="tab">
               
                </label>
                <div className="login-form">
                  <div className="sign-in-htm">
                    <form onSubmit={this.handleLogin}>
                      <div className="group">
                        <label for="user" className="label">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="input"
                          name="email"
                          onChange={this.handleChange}
                          value= { email }
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
                          onChange={this.handleChange}
                          value = { password }
                        />
                      </div>
                      <div className="group">
                       <input type = "checkbox" />
                        <label for="check" className = "chck">
                         Keep me Signed in
                        </label>
                      </div>
                      <div className="group">
                        <button className="button">Sign In</button>
                      </div>
                      <div className="hr" />
                      <div className="foot-lnk">
                      <a href="#forgot" className = "chck" onClick={this.forgotPw}><Link to="/forgot_password">Forgot Password? </Link></a>
                      </div>
                    </form>
                  </div>

                
                </div>
              </div>
            </div>
            
            {/* <Form onSubmit = { this.handleLogin }>
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  onChange = { this.handleChange }
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="examplePassword" hidden>
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  onChange = { this.handleChange }
                />
              </FormGroup>{" "}
              <Button color = "dark" style = {{marginTop:'2rem'}} block>Submit</Button>
            </Form> */}
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
  });

export default connect( mapStateToProps, { login, clearErrors,forgotPassword })(LoginModal);
