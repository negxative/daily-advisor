import axios from 'axios';
import React, { useEffect, useRef ,useState} from 'react'
import { HomeContents } from '../HomeScreen/HomeContents';
import "./SearchScreen.scss"

export const SearchScreen = () => {
  const inputRef=useRef(null);
  const headRef=useRef(null);
  const  bodyRef=useRef(null);
  const  contentRef=useRef(null);
  const [inputValue,setInputValue]=useState();
  const  [searchResults,setSearchResults]=useState();

useEffect(() => {
  inputRef.current.focus();
},[])

const submit=async (e)=>{
  e.preventDefault(); 
  const res=await axios.get(`https://api.adviceslip.com/advice/search/${inputValue}`);
  
  try{
    setSearchResults(res.data.slips[0]);
  }
  catch(e){
    setSearchResults({
      id:"-1",
      advice:"No advices found on the term :("
    })
  }

  headRef.current.style.transform="translateY(-200px)";
  bodyRef.current.style.transform="translateY(-100px)";

}


  return (
    <div className='Search-Container'>
        <div className='Search-Head' ref={headRef}>
          Enter Keyword to Search Advise On :D
        </div>
        <form className='Search-Bar' ref={bodyRef} >
           <input type="text" ref={inputRef} placeholder="Type Here" onChange={(e)=>{setInputValue(inputRef.current.value);}}/>
           <button onClick={submit}>Search</button>
        </form>
        <div  ref={contentRef} >
            {searchResults?<HomeContents response={searchResults} dataFetcher={null} />:""}
        </div>
    </div>
  )
}
