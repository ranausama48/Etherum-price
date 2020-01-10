import {GET_USER} from './types'

export const getUsersList = () => (dispatch) => {
    //user loading
   
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