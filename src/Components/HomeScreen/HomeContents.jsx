import React from 'react'
import "./Home.scss"
import img from "../../images/devider.svg"
import dice from "../../images/dice.svg"

export const HomeContents = ({response,dataFetcher}) => {
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
            <div className='Advise-Refresher'>
                <img src={dice} alt="Search New Advices" onClick={dataFetcher}/>
            </div>
    </div>
  )
}
