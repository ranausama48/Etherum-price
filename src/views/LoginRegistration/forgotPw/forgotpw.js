import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../../../Redux/Actions/authActions'
import { clearErrors } from '../../../Redux/Actions/errorActions'
import { forgotPassword } from '../../../Redux/Actions/authActions'
import { Alert } from "reactstrap";
import Header from '../../header'

class ForgotPassword extends Component {
  state = {
    // modalOpen: true,
    email: "",
    password: "",
    msg: null
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });

      }
    }

  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  forgotPw = (e) => {
    e.preventDefault();
    this.props.forgotPassword(this.state)
    this.setState({
      msg: 'Link has been sent on your email.'
    })
    setInterval(() => {
this.setState({
  msg: ''
})
      
    }, 3000);
  }
  render() {
    const { email, password } = this.state
    return (
      <>
        <Header />
        <div style={{ marginTop: 80 }}>

          {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}

          <div className="login-wrap"
            style={{
              height: 580
            }}>
            <div className="login-html">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label for="tab-1" className="tab">
                Forgot Password
                </label>
              {/* <input id="tab-2" type="radio" name="tab" className="sign-up" /> */}
              <label for="tab-2" className="tab">

              </label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <form>
                    <div className="group">
                      <label for="user" className="label">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="input"
                        name="email"
                        onChange={this.handleChange}
                        value={email}
                      />
                    </div>
                    <div className="group">
                      <button className="button" onClick={this.forgotPw}>Proceed</button>
                    </div>

                  </form>
                </div>


              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors, forgotPassword })(ForgotPassword);
