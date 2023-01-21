import {BaseUrl} from '../Constants/BaseUrl'
import axios from 'axios'


const getSongs=()=>
{
    console.log("Get song Api")
    return axios.get(`${BaseUrl}/AllRingtone`,
    {headers:{
      
        "Authorization":"18|b198OgyR6M1LZIXV8AfS595Mmk6TRISMiXx84vbU"
    }})
 
}

// const setAlarm=(data)=>
// {
//     console.log("AlarmApiDAta",data)
//     return axios.post(`${BaseUrl}/update_profile`,
//     data,
//     {headers:{
//         "Content-Type": "multipart/form-data",
//         "Authorization":"18|b198OgyR6M1LZIXV8AfS595Mmk6TRISMiXx84vbU"
//     }})
 
// }


export default{
    getSongs
    // setAlarm
}