import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (url) =>{
    const [data , setData] = useState([])
    const [loading , setLoadin] = useState([])
    const [error , setError] = useState([])

 useEffect(()=>{
     const fetchData = async () =>{
         try{
           setLoadin(true)
           const res = await axios.get(url)
       }catch(err){
           setError(err)
       }
    setLoadin(false)
     }
     fetchData()
    },[url])

    const reFetch = async () =>{
        try{
          setLoadin(true)
          const res = await axios.get(url)
      }catch(err){
          setError(err)
      }
     setLoadin(false)
 }
  return { data, loading, error, reFetch}
}
    export default useFetch