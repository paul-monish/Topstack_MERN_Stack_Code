import axios from "axios"
const API_URL='https://fakestoreapi.com';
const API_URL1='http://localhost:5001/api/v1';
const API_URL2='http://localhost:3000';
export const api=axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type':'application/json',
       
    }
});
// const token =sessionStorage.getItem('token');
// console.log(token);

export const privateApi=axios.create({
    baseURL:API_URL1,
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${sessionStorage.getItem('token')}`,
    }
});


export const api1=axios.create({
    baseURL:API_URL1,
    headers:{
        'Content-Type':'application/json',
    }
})

export const api2=axios.create({
    baseURL:API_URL2,
    headers:{
        'Content-Type':'application/json',
    }
})