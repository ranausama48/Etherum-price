import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../../../Redux/Actions/authActions'
import { clearErrors } from '../../../Redux/Actions/errorActions'
// import { confirmToken } from '../../../Redux/Actions/authActions'
import { Alert } from "reactstrap";
import Header from '../../header'

class ErrorPage extends Component {
  state = {
    // modalOpen: true,
    token: "",
    // password: "",
    msg: "Your Link has been expired"
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
    this.props.confirmToken(this.state)
    // this.setState({
    //   msg: 'Check your email'
    // })
  }
  render() {
    const { token } = this.state
    return (
      <>
        <Header />
        <div style={{ marginTop: 80 }}>
        <div className="container">

      <h3 className='jumbotron errHead'  >Error: Your Link has been expired...!!!</h3>
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

export default connect(mapStateToProps, { login, clearErrors })(ErrorPage);
