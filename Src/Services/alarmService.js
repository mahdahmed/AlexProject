import {BaseUrl} from '../Constants/BaseUrl'
import axios from 'axios'


const getAlarm=()=>
{
    console.log("GetAlarm")
    return axios.get(`${BaseUrl}/getAlarm`,
    {headers:{
      
        "Authorization":"18|b198OgyR6M1LZIXV8AfS595Mmk6TRISMiXx84vbU"
    }})
 
}

const setAlarm=(data)=>
{
    console.log("SetAlarmApiDAta",data)
    return axios.post(`${BaseUrl}/setAlarm`,
    data,
    {headers:{
        "Content-Type": "multipart/form-data",
        "Authorization":"18|b198OgyR6M1LZIXV8AfS595Mmk6TRISMiXx84vbU"
    }})
 
}

const setAlarm_On_Off=(data)=>
{
    console.log("SetAlarmApiDAta",data)
    return axios.post(`${BaseUrl}/update_status`,
    data,
    {headers:{
        // "Content-Type": "multipart/form-data",
        "Authorization":"18|b198OgyR6M1LZIXV8AfS595Mmk6TRISMiXx84vbU"
    }})
 
}
const deleteAlarm=(id)=>
{
    console.log("DeleteAlarmApiDAta",id)
    return axios.delete(`${BaseUrl}/delete_alarm/${id}`,
    {headers:{
        // "Content-Type": "multipart/form-data",
        "Authorization":"18|b198OgyR6M1LZIXV8AfS595Mmk6TRISMiXx84vbU"
    }})
 
}

export default{
    getAlarm,
    setAlarm,
    setAlarm_On_Off,
    deleteAlarm
}