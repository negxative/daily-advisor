import React, { useState } from 'react'
import "./Home.scss"
import img from "../../images/devider.svg"
import dice from "../../images/dice.svg"

export const HomeContents = ({response,dataFetcher}) => {

  const   [isDisabled,setDisabled] = useState(false);

  const clickHandler=()=>{
    setDisabled(true);
    dataFetcher();
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  }
  return (
    <div className="Advise-Container">
      {/* TO display advise number or id */}
            <div className="Advise-Head">  
               {response? "ADVICE # "+response.id:" "}  
            </div>
            {/* BOdy of fetched advice*/}
            <div className="Advise-Body">
                <center>
                {response? response.advice:" "}
                </center>
            </div>
            <div >
                   <img src={img} alt="Icon"  className='Advise-Separator'/>
            </div>
             {/* Refresh to a new advice*/}
            <div className={((!isDisabled)?'Advise-Refresher':"Advise-Refresher Disabled")}>
               <img src={dice} alt="Search New Advices" onClick={(!(isDisabled))?clickHandler:null}/>
            </div>
    </div>
  )
}
