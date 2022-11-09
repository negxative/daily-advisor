import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HomeContents } from './HomeContents'

export const Home = () => {
const URL="https://api.adviceslip.com/advice";
const [response,setResponse]=useState(); // Response of fetched data  to be stored in state and passed down as a prop

useEffect(() => {
   dataFetcher();   //to run on component mount
},[])

const dataFetcher=async ()=>{      //To make http request and fetch the data
  const res=await axios.get(URL);
  setResponse(res.data.slip);
}

  return (
      response?<HomeContents response={response} dataFetcher={dataFetcher}/>:""  //Conditionally rendering whenever data gets loaded
  )
}
