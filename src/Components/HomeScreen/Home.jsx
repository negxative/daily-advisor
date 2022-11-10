import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HomeContents } from './HomeContents'

export const Home = () => {

const URL="https://api.adviceslip.com/advice";
const [response,setResponse]=useState(); // Response of fetched data  to be stored in state and passed down as a prop


const dataFetcher=async ()=>{      //To make http request and fetch the data
  const res=await axios.get(URL);
  setResponse(res.data.slip);
  sessionStorage.setItem("searchItem",JSON.stringify(res.data.slip));
}
useEffect(() => {
   if(sessionStorage.getItem("searchItem")){
    let parsedString=JSON.parse(sessionStorage.getItem("searchItem"))
    setResponse(parsedString);
    // sessionStorage.removeItem("searchItem")
   }
   else{
      dataFetcher();
   }
},[])


  return (
      response?<HomeContents response={response} dataFetcher={dataFetcher}/>:""  //Conditionally rendering whenever data gets loaded
  )
}
