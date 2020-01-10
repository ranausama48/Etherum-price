import React, { Component } from 'react'
import Trade from '../Tabs/Trade/Trade'
import Profile from './Profile/Profile'
import Market from './Market/Market'
// import Transaction from './transactions/Transaction'
import Transaction from './transactions/Transaction'
import { connect } from 'react-redux';
import User from './Users/user'
 class Tabs extends Component {
    componentWillMount() {
             
    }
   
    render() {
        return (
            <div>
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Transaction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Trade</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Profile</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link my-0" id="market-tab" data-toggle="tab" href="#market" role="tab" aria-controls="market" aria-selected="false">Market</a>
                    </li> */}

                    <li className="nav-item">
                    {
                        this.props.adminRoleauth.role 
                        // true
                        ?
                        <a className="nav-link my-0" id="market-tab" data-toggle="tab" href="#market" role="tab" aria-controls="market" aria-selected="false">Market</a> 
                        
                        : 
                        null
                    }
                    </li>
                    <li className="nav-item">
                    {
                        this.props.adminRoleauth.role 
                        // true
                        ?
                        <a className="nav-link my-0" id="user-tab" data-toggle="tab" href="#users" role="tab" aria-controls="market" aria-selected="false">Users</a> 

                        : 
                        null
                    }
                    </li>
                    
                   
                </ul>
                <div className="tab-content p-0" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Transaction /></div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Trade/></div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><Profile /></div>
                    <div className="tab-pane fade" id="users" role="tabpanel" aria-labelledby="user-tab"><User /> </div>

                    <div className="tab-pane fade" id="market" role="tabpanel" aria-labelledby="market-tab">
                    {
                         this.props.adminRoleauth.role 
                        // true
                         ? <Market />:null
                    }
                    </div>
                    
                    {/* <div className="tab-pane fade" id="market" role="tabpanel" aria-labelledby="market-tab">
                    <Market/>
                    
                    </div> */}
                    {/* <Market /> */}
               
                </div>
            </div>
        )
    }
}

const mapStatetoprops = (store)=>({
//console.log(store.auth.user)
 adminRoleauth:store.auth.user
})

  
export default connect(mapStatetoprops)(Tabs);