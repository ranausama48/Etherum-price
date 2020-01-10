import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../../../Redux/Actions/authActions'
import { clearErrors } from '../../../Redux/Actions/errorActions'
import { setNewPassword } from '../../../Redux/Actions/authActions'
import { Alert } from "reactstrap";
import Header from '../../header'

class NewPassword extends Component {
  state = {
    // modalOpen: true,
    confirmPassword: "",
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
    const { confirmPassword, password } = this.state

    if(password == confirmPassword){
      console.log('working');
      
        this.props.setNewPassword(this.state)
        return true
        
    }
    this.setState({
        msg: "Password didn't match"
    })
    setInterval(() => {
      this.setState({
        msg: ""
    })
    }, 3000);
    // this.props.forgotPassword(this.state)
  }
  render() {
    const { confirmPassword, password } = this.state
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
                Set New Password
                </label>
              {/* <input id="tab-2" type="radio" name="tab" className="sign-up" /> */}
              <label for="tab-2" className="tab">

              </label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <form>
                    <div className="group">
                      <label for="user" className="label">
                        New Password
                      </label>
                      <input
                        id="email"
                        type="password"
                        className="input"
                        name="password"
                        onChange={this.handleChange}
                        value={password}
                      />
                    </div>
                    <div className="group">
                      <label for="user" className="label">
                        Re-type Password
                      </label>
                      <input
                        id="email"
                        type="password"
                        className="input"
                        name="confirmPassword"
                        onChange={this.handleChange}
                        value={confirmPassword}
                      />
                    </div>
                    <div className="group">
                      <button className="button" onClick={this.forgotPw}>Confirm</button>
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

export default connect(mapStateToProps, { login, clearErrors, setNewPassword })(NewPassword);
