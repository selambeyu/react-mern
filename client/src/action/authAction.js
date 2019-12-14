import axios from 'axios';

import {GET_ERRORS} from './types'


export const  registerUser= userData =>dispatch=>{
     axios
     .post('http://localhost:4000/users/register',userData)
     .then(res => console.log(res.data))
     .catch(err=>dispatch({
         type: GET_ERRORS,
         payload: err.response.data
     }))
}