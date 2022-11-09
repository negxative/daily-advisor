import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { HomeContents } from './HomeContents'

export const Home = () => {
const URL="https://api.adviceslip.com/advice";
const [response,setResponse]=useState();

useEffect(() => {
   dataFetcher();
},[])

const dataFetcher=async ()=>{
  const res=await axios.get(URL);
  setResponse(res.data.slip);
}

  return (
      response?<HomeContents response={response} dataFetcher={dataFetcher}/>:""
  )
}
