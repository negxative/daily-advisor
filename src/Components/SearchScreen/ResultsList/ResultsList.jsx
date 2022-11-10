import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeContents } from '../../HomeScreen/HomeContents'
import  "./ResultList.scss"
export const ResultsList = ({response}) => {

  const navigate=useNavigate();

  const displaySelectedAdvice=(el)=>{
    console.log(el);
     sessionStorage.setItem("searchItem",JSON.stringify(
      { 
      id:el.id,
      advice:el.advice
    }
    ));
    navigate("/");
  }
  let x;
  try{
   x= response.map((el,index)=>{
        return (
          <div key={index} className="Item" onClick={()=>{displaySelectedAdvice(response[index])}}>
                  <div style={{color:"#53ffa9"}}>
                      Advice # {el.id}
                  </div>
                  <div>
                    <center>
                    {el.advice}
                    </center>
                  </div>
          </div>
        )
  })
}
catch(e){
  return(
    x=<HomeContents response={response} dataFetcher={null} />
  )
}

  return (
   <div className='List-Container'>
    { 
        x
    }
   </div>
  )
}
