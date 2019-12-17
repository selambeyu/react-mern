import axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
import jwtDecode from 'jwt-decode'
import {SET_CURRENT_USER} from './types'
import {GET_ERRORS} from './types'


export const  registerUser= (userData,history) =>dispatch=>{
     axios
     .post('http://localhost:4000/users/register',userData)
     .then(res => history.push('/login'))
     .catch(err=>dispatch({
         type: GET_ERRORS,
         payload: err.response.data
     }))
} 


export const loginUser=userData=>dispatch=>{
    axios
    .post('http://localhost:4000/users/login',userData)
    .then(res=>{
        //save to localstrorage
        const { token }= res.data;
        localStorage.setItem('jwtToken',token);
        //set tokent to auth header
        setAuthToken(token);
        // Decode token to get user date 
        const decoded =jwtDecode(token);
        dispatch(setCurrentUser(decoded))
         
    })
    .catch(err=>dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))

}
// this.props.history.push('/dashboard')

export const setCurrentUser =(decoded)=>{
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}