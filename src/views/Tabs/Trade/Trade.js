import React, { Component } from 'react'
import { connect } from "react-redux";

import {tradeing} from '../../../Redux/Actions/tradeAction'
import axios from 'axios'
import './style.css'
class Trade extends Component {
    
    constructor(props)
    {
        super(props);
        this.state={
            //cryptosrate:"",
            eth_quantity:"",
            eth_price:"",
            Trad_date:"",
            checkAmount: null,
             username:"",
             eth_quantity:"",
             alertResult:false
        }

    }   
    date=()=>{
        let Fulldate = new Date();//Wed Sep 25 2019 11:08:03 GMT+0500 (Pakistan Standard Time)
        var currentdate = Fulldate.getDate();//25
        
        var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let exactdayname=dayNames[Fulldate.getDay()];//wed

        var monthname=["jan","Feb","March","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
        let exactmonth=monthname[Fulldate.getMonth()];//sep
        
        let year = Fulldate.getFullYear();//2019
        var exactdate=exactdayname+" "+exactmonth+" "+currentdate+" "+year
        //console.log(exactdayname, "", exactmonth,"",currentdate,"", year);
        //console.log(exactdate);
        this.setState({Trad_date:exactdate})


    }
    componentWillMount(){
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&e=Coinbase&extraParams=your_app_name')
        .then(res =>{
            const cryptos = res.data.ETH.USD;
            const aftr_Round = Math.round(cryptos)
            // console.log(aftr_Round)

            //console.log(cryptos.USD);
            this.setState({eth_price:aftr_Round})
        })
        // console.log(this.state.eth_price)
        var ETH_in_usd=+Math.round(this.state.eth_price)
        this.setState({eth_price:ETH_in_usd})
    }
    componentDidMount(){
            this.refs.subAmount.disabled = true
        this.setState({
            //eth_price: this.refs.eth_price.value,
           //eth_price:ETH_in_usd,
            c_balance: this.refs.c_balance.value,
            result: ""
        })

         console.log(this.state)

    }



  
    


    chageHandler = (e)=>{
        var name = e.target.name;
        var input_value = e.target.value;
        // console.log(name,input_value)
        
        //this.setState({eth_quantity:input_value})
        if(input_value)
        {
           //console.log(this.state)
            let {eth_price,c_balance} = this.state
            // console.log(this.state)

            let checkAmount = eth_price * input_value
            // console.log("Check Amount",checkAmount)
            this.setState({checkAmount:checkAmount})
            // console.log(this.state)
                    if (checkAmount < c_balance)
                        {
                            // this.setState({eth_quantity:input_value})
                            this.setState({result:"You can buy Etherum",textClass:"text-success",eth_quantity:input_value});
                            this.refs.subAmount.disabled = false
                            this.date(); 
                        }
                    
                    else
                        {
                        this.setState(
                            {result:"Your current balance have not enough",textClass:"text-danger"}
                            );
                            this.refs.subAmount.disabled = true
                        }
                        
                        
        // console.log(checkAmount);
        
        }
        
        else
        {
            this.setState({result:"",textClass:"",checkAmount:null})
            this.refs.subAmount.disabled = true

        }
    }

    buyEthereum = ()=>{
        this.state.userID = this.props.authdata.user._id
        let usertrade= this.state
        this.props.tradeing(usertrade)
        console.log(usertrade)
    }
    buyEthereum = dispatch => {
         const config = {
             headers: {
                 "Content-Type": "application/json"
             }
         }
        let {
            eth_price,
            c_balance,
            checkAmount,
            // c_date,
            // username
        } = this.state

         const body = JSON.stringify({
             eth_price,
             c_balance,
             checkAmount,
            //  c_date,
            //  username
         })
         axios.post('/trade', body, config)
             .then(res => {
                 return res
             }).then(res => dispatch =>({
                 type:"YOU_BUY_ETHEREUM",
                 payload:res.data
             }))
             .catch(err => console.log(err))
        //  console.log(this.state.c_balance)
// >>>>>>> Stashed changes
    }
    // buyEthereum = dispatch => {
        
    //      const config = {
    //          headers: {
    //              "Content-Type": "application/json"
    //          }
    //      }
    //     // let {
    //     //     eth_price,
    //     //     c_balance,
    //     //     checkAmount,
    //     //     Trad_date,
    //     //     eth_quantity
    //     // } = this.state

    //      this.state.userID = this.props.authdata.user._id;

    //      const body = JSON.stringify(this.state);



    //      axios.post('/trade', body, config)
    //          .then(res => {
    //              console.log('checkkk,',res.data.trade)
    //              return res
    //          }).then(res => dispatch({
                
    //              type:"YOU_BUY_ETHEREUM",
    //              payloda:res.data.trade
    //          }))
    //          .catch(err => console.log(err))
        
        //this.refs.subAmount.disabled=false;

  render() {
    
    
   // console.log(this.state)

    const { isAuthenticated, user } = this.props.authdata;
    //  console.log('check user', user)
     //console.log(this.props.tradeData)
    return (
        <div>
            <div class="card text-center align-items-center " >
                
                <div class="card-body col-md-6 " style={{backgroundColor:'black !important'}}>    
                    <div class="input-group mb-3" >
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Current Balance PKR</span>
                        </div>
                        <input  type="text" 
                            disabled
                            id="currentbalance"
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            value="25000"
                            ref="c_balance"
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Ethereum Price PKR</span>
                        </div>
                        <input  type="text" 
                            disabled
                            id="etherumprice"
                            ref="eth_price"
                            className="form-control p-4 text-white border-0"
                            //value={ETH_in_usd}
                            //value="254"
                            value={this.state.eth_price}
                            aria-label="Sizing example input" 
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text w-6" id="inputGroup-sizing-default">Buy Ethereum</span>
                        </div>
                        < input type = "number"
                        ref="eth_quantity"
                        onChange = {
                            this.chageHandler
                        }
                            className="form-control p-4 text-white border-0"
                            id="buy_etherum"
                            aria-label="Sizing example input" 
                            onChange={this.chageHandler}
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div> 
                   
                    <p className={this.state.textClass ? this.state.textClass : ""} >
                        {this.state.result} 
                    </p>
                    <p className={this.state.textClass ? this.state.textClass : ""} >
                        {
                            this.state.checkAmount ? "Total Ethereum " +  this.state.checkAmount: null
                        }
                    </p>
                </div>
                <div class="card-footer text-muted">
                   
                        <button type="submit" 
                        onClick={this.buyEthereum}
                        ref="subAmount"
                        
                        className="input-grouptext btn btn-dark px-5 border-0"
                        style={{ backgrund: "", color: "white", fontWeight: "600",textAlign:'right' }}
                        >
                            SUBMIT
                        </button>
                   
                </div> 
            </div>
        </div>
    )
  }
}
const mapStateToProps = state => ({
    authdata: state.auth
  });
export default connect(mapStateToProps,{tradeing})(Trade)
