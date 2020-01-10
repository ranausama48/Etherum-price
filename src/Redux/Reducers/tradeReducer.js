import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    YOU_BUY_ETHEREUM
  } from "../Actions/types";
  const initialState = {
    trade_info:null,
        // eth_price:'',
        // c_balance:'',
        // checkAmount:'',
        // Trad_date:'',
        // eth_quantity:'',
        // userID:''
  };
  
   function tradeing(state = initialState, action) {
    switch (action.type) {
      case YOU_BUY_ETHEREUM:
      console.log(action.payload)
        return {

          ...state,
          trade_info:action.payload
        };
        
        break;
      
      default:
        return state;
    }
  }
  export default tradeing;