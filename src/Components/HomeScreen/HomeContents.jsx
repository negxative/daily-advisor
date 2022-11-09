import React from 'react'
import "./Home.scss"
import img from "../../images/devider.svg"
import dice from "../../images/dice.svg"

export const HomeContents = ({response,dataFetcher}) => {
  return (
    <div className="Advise-Container">
            <div className="Advise-Head">
               {response? "ADVICE # "+response.id:" "}
            </div>
            <div className="Advise-Body">
                <center>
                {response? response.advice:" "}
                </center>
            </div>
            <div >
                   <img src={img} alt="Icon"  className='Advise-Separator'/>
            </div>
            <div className='Advise-Refresher'>
                <img src={dice} alt="Search New Advices" onClick={dataFetcher}/>
            </div>
    </div>
  )
}
