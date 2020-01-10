import React, { Component } from 'react'
import axios from 'axios'
class UserTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList : []
    }
    getUserData = () => {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      // let user = this.props.authdata.user
      let body = JSON.stringify({
        // user
      })
      axios.get('/get_user')
        .then(res => {
          // console.log(res)
          this.setState({
            userList: res.data.userlist

          })
          console.log(res.data.userlist)
          // res.json()
        })
        .catch(err => { })
    }
    getUserData()
  }
  addBalance = (id) => {
    // console.log(id);

  }
  render() {
    return (
      <div>
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Balance</th>
              <th scope="col">Action</th>
              {/* <th scope="col">Amount</th> */}
            </tr>
          </thead>
          <tbody>
            {
              // let count = 0;
              this.state.userList.map((capitalData, index) => {
                let { username, email, _id } = capitalData
                // console.log(capitalData)
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>nothing</td>
                    <td>
                      <button className="btn btn-dark" onClick={() => {
                        this.props.balance(capitalData)
                        this.props.changeTab()
                      }}>Add</button>
                      {/* <a className="nav-link my-0" id="user-tab" data-toggle="tab" href="#addBalance" role="tab" aria-controls="market" aria-selected="false"
                        onClick={() => {
                          this.addBalance(_id)
                        }}>Add Balance</a> */}
                    </td>
                    {/* <td>{checkAmount}</td> */}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
        
    )
  }
}

export default UserTab
export let getUserData;