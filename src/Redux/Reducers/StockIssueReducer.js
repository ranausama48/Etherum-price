import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    YOU_BUY_ETHEREUM,
    CAPITAL_DATA,
    PROFIT_ADDED
  } from "../Actions/types";
  const initialState = {
    stock_Ifo:null,
        // eth_price:'',
        // c_balance:'',
        // checkAmount:'',
        // Trad_date:'',
        // eth_quantity:'',
        // userID:''
  };
  
   function stockSend(state = initialState, action) {
    switch (action.type) {
      case CAPITAL_DATA:
      console.log(action.payload)
        return {

          ...state,
          stock_Ifo:action.payload
        };
        
        break;
        case PROFIT_ADDED:
          console.log(action.payload);
          return{
            stock_Ifo: action.payload
          }
          break;
          
      
      default:
        return state;
    }
  }
  export default stockSend;