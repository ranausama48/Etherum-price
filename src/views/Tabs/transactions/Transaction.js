import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

 class Transaction extends Component {
     
    constructor(props){ 
        super(props);
        this.state = {
            tradeDetail: []
        }
        //

         getTradeData = () =>{
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            let user = this.props.authdata.user
            let body = JSON.stringify({
                user
            })
            axios.post('/showTrade', body, config)
                .then(res =>
                    // console.log(res)
                    this.setState({
                        tradeDetail: res.data.trades
                    })
                    // res.json()
                )
                .catch(err => {})
        }
        getTradeData()

    }
    render() {
        // console.log(this.state)
       return(
            <div>
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // let count = 0;
                         this.state.tradeDetail.map((trade,index) => {
                        let {Trad_date,c_balance,
                            checkAmount,eth_price,
                            eth_quantity,userID,_id} = trade
                        // console.log(username)
                        return ( 
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{Trad_date}</td>
                            <td>{eth_quantity}</td>
                            <td>{eth_price}</td>
                            <td>{checkAmount}</td>
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
let mapStateToProps = state =>({
        authdata: state.auth
        // tradeInfo:state.trade_info
   
})
export default connect(mapStateToProps)(Transaction);
export let getTradeData