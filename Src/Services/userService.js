import {BaseUrl} from '../Constants/BaseUrl'
import axios from 'axios'

const getUserProfile=()=>
{
    console.log("GetProfile")
    return axios.get(`${BaseUrl}/get_profile`,
    {headers:{
        "Authorization":"16|fINshWLzp1Ro1oJ7TYGh20y0QmNzMF9SV3qAbiJ9"
    }})
 
}


const uploadUserImage=(data)=>
{
    console.log("imageAPIData",data)
    return axios.post(`${BaseUrl}/image_update`,
    data,
    {headers:{
        "Content-Type": "multipart/form-data",
        "Authorization":"16|fINshWLzp1Ro1oJ7TYGh20y0QmNzMF9SV3qAbiJ9"
    }})
 
}

const updateProfile=(data)=>
{
    console.log("imageAPIData",data)
    return axios.post(`${BaseUrl}/update_profile`,
    data,
    {headers:{
        // "Content-Type": "multipart/form-data",
        "Authorization":"16|fINshWLzp1Ro1oJ7TYGh20y0QmNzMF9SV3qAbiJ9"
    }})
 
}


export default{
    getUserProfile,
    uploadUserImage,
    updateProfile
}