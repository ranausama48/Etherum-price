import axios from 'axios'
import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    UPDATE_FAILED,
    UPDATE_SUCCESS
  } from "./types";
  import { returnErrors } from './errorActions';

  //RegisterUser

  export function register(data){
      return dispatch => {

            const config = {
                headers: {
                    "Content-Type":"application/json"
                }
            }
            // const body = JSON.stringify({ username, email, password })
            console.log(data);
            
            axios.post('/register', data, config)
            .then( res => dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            }))
            .catch(err =>  
                dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")),
                dispatch({
                type: REGISTER_FAILED,
        
            }))
          } 
  }


//   export const register = ({ username, email, password }) => dispatch => {

//     const config = {
//         headers: {
//             "Content-Type":"application/json"
//         }
//     }
//     const body = JSON.stringify({ username, email, password })
//     console.log(body);
    
//     axios.post('/register', body, config)
//     .then( res => dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data
//     }))
//     .catch(err => 
//         dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")),
//         dispatch({
//         type: REGISTER_FAILED,

//     }))
//   } 

  //LOGIN USER
  

  export const login = ( {email, password} ) => dispatch => {
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({ email, password })

    axios.post('/login', body, config)
    .then( res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      
        
    }))
    .catch(err => 
        dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")),
        dispatch({
        type: LOGIN_FAILED,

    }))
  }

  export const update = ( {username, email, password, oldpassword} ) => dispatch => {
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }
    const body = { username, email, password, oldpassword}
    console.log(body);
     

    axios.post('/update', body, config)
    .then( res => dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      
        
    }))
    .catch(err => 
        dispatch(returnErrors(err.response.data, err.response.status, "UPdATE_FAIL")),
        dispatch({
        type: UPDATE_FAILED,

    }))
  }

  //LOGOUT USER
  export const logout = () => {
      return {
          type: LOGOUT_SUCCESS
      }
  }

  //Check Token & load user
  export const loaduser = () => (dispatch, getState) => {
      //user loading
      dispatch({ type: USER_LOADING })
     
      axios.get('user', tokenConfig(getState))
      .then(res => dispatch({
          type: USER_LOADED,
          payload:res.data,
          
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
  }
  //Setup config/headers & token

  export const tokenConfig = getState => {
 //Get token from localstorage
 const token = getState().auth.token;

 //Headers
 const config = {
     headers:{
         "Content-type":"application/json"
     }
 }
 //If token , add to headers
 if(token){
     config.headers['x-auth-token'] = token
 }
 return config
  }


  
export const forgotPassword = (data) => {
    return dispatch =>{

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }  

    axios.post('/forgotpassword',data, config)
        .then(res => dispatch({

            type: "FORGOT_PASSWORD",
            payload: res.data.capital

        }
        ))
        .catch(err => console.log(err))
        
    }

}

  
export const setNewPassword = (data) => {
    return dispatch =>{

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }  
    console.log(data);
    
    
    axios.post('/change_password',data)
        .then(res => dispatch({

            type: "PASSWORD_CHANGED",
            payload: res.data.capital

        }
        ))
        .catch(err => console.log(err))
        
    }

}