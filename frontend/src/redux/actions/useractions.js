import axios from 'axios';

import{CREATE_USER,LOGIN_USER} from './types';

export const createUser=({username,email,password})=>(dispatch)=>{
    console.log(username);
    console.log("hellooooo");
    axios.post(`http://localhost:5000/api/users/signup`,{username,email,password})
    .then((res)=>{
        console.log(res.data);
        dispatch({
            type:CREATE_USER,
            payload:res.data,
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}

export const loginUser=({email,password})=>(dispatch)=>{
    console.log(email);
    axios.post(`http://localhost:5000/api/users/login`,{email,password})
    .then((res)=>{
        console.log(res.data);
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}