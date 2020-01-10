import React, { Component } from 'react'
import axios from 'axios'
import AddBalance from './addBalance/addBalance'
import UserTab from './usersTab/usersTab'
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail : []
    }
  //   getUserData = () => {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }
  //     // let user = this.props.authdata.user
  //     let body = JSON.stringify({
  //       // user
  //     })
  //     axios.get('/get_user')
  //       .then(res => {
  //         // console.log(res)
  //         this.setState({
  //           userList: res.data.userlist

  //         })
  //         console.log(res.data.userlist)
  //         // res.json()
  //       })
  //       .catch(err => { })
  //   }
  //   getUserData()
  }
  addBalance = (id) => {
    // console.log(id);

  }
  changeTab = () => {
    document.getElementById('userTab').classList.remove('show', 'active')
    document.getElementById('addBalance').classList.add('show', 'active')

    console.log('working');


  }
  changeTab2 = () => {
    document.getElementById('addBalance').classList.remove('show', 'active')

    document.getElementById('userTab').classList.add('show', 'active')
    console.log('working');


  }
addBalance = (prevState) => {
  console.log(prevState);
  
    this.setState({
      userDetail: prevState
    })
  }
  render() {
    return (
      <div>
        <div className="tab-content p-0" id="myTabContent">
          <div className="tab-pane fade show active" id="userTab" role="tabpanel" aria-labelledby="home-tab">
            <UserTab changeTab={this.changeTab} balance={this.addBalance}/>
          </div>
          <div className="tab-pane fade " id="addBalance" role="tabpanel" aria-labelledby="profile-tab">
            <AddBalance changeTab={this.changeTab2}
            state={this.state.userDetail} />
          </div>

        </div>
      </div>
    )
  }
}

export default Users
export let getUserData;