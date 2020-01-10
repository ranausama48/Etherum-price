import axios from "axios";
// import {getTradeData} from "../../views/Tabs/Transactions/Transaction"
import {getTradeData} from '../../views/Tabs/transactions/Transaction'
 export const tradeing = ({ eth_price, c_balance, checkAmount,Trad_date,eth_quantity,userID }) => dispatch => {
  
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({ eth_price, c_balance, checkAmount,Trad_date,eth_quantity,userID })

    axios.post('/trade', body, config)
             .then(res => {
                 getTradeData()
                //  console.log('checkkk,',res.data.trade)
                 return res
             }).then(res => dispatch({
                
                 type:"YOU_BUY_ETHEREUM",
                 payload:res.data.trade
             }))
             .catch(err => console.log(err))
        //  console.log(this.state.c_balance)
  } 
