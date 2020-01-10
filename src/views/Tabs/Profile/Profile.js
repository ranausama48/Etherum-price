
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { update } from '../../../Redux/Actions/authActions'
export class Profile extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    oldpassword: "",
  }


  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleUpdate = e => {
    e.preventDefault();
    const {username, email, password, oldpassword } = this.state;
    // email = this.state.email
    this.setState({
      username:'',
    email: '',
    password:'',
    oldpassword:''
    })
    const user = {
      username,
      email,
      password,
      oldpassword
    }
    this.props.updateUser(user);

    
  };

    render() {

      let user = this.props.auth || {};
      // console.log(this.props.auth);
      // let password = user.password
      // console.log(password);
      const { username, email, password, oldpassword } = this.state;
      return (

        <form onSubmit={this.handleUpdate} style={{ width: "30%", margin: "auto" }}>

          <div class="form-group" >
            <label for="exampleInputUsername">User name</label>
            <input
              type="text"
              class="form-control" id="exampleInputUsername"
              onChange={this.handleChange}
              name = "username"
              value={username}
              // placeholder={user.username} 
              placeholder="Username"

              />

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              onChange={this.handleChange}
              name = "email"
              value={email}
              aria-describedby="emailHelp"
              // placeholder={user.email} 
              placeholder="Your email" 

              />

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Old Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={this.handleChange}
              name = "oldpassword"
              value={oldpassword}
              placeholder="Old-Password" 
              // placeholder={user.password} 
              />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">New Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={this.handleChange}
              name = "password"
              value={password}
              placeholder="Password" />
          </div>


          <button type="submit" class="btn btn-primary">Change</button>
        </form>





      )
    }
  
}
const mapDispatchToProps = (dispatch) =>  {
return {
      updateUser: (user)=>{
        dispatch(update(user))
      }
}
}
const mapStateToProps = state => ({
  auth: state.auth.user

});
export default connect(mapStateToProps,mapDispatchToProps)(Profile); 
