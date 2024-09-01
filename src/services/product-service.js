// export const getProducts=()=>{
//     return fetch('https://fakestoreapi.com/products',{
//         method: 'GET',
//     })
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         return data;
//     })
//     .catch((error)=>{
//         throw error;
//     })
// }

import { api, privateApi } from "./api-config";



export const getProducts=()=>{
    return api.get(`/products`)
    .then((response)=>{
            return response.data;   
        }
    )
    .catch((error)=>{
        throw error.message??'Something went Wrong!!';
        
    })
}

export const getCategories=()=>{
    return privateApi.get(`/category`)
    .then((response)=>{
            return response.data;   
        }
    )
    .catch((error)=>{
        throw error.message??'Something went Wrong!!';
        
    })
}