import React from "react";
import overviewbrowserguy from "../../assets/overviewbrowserguy.svg"

export const Banner:React.FC = () => {
  return(
    <div className="backgroundPrimary w-100 h-screen-50">
      <div className="d-flex flex-column h-100">
        <div className="p-5 pb-0">
          <h4>A D S O U L</h4>
        </div>
        <div className="flex-grow-1">
          <div className="d-flex justify-content-center h-100" >
            <img src={overviewbrowserguy} className="w-max-75 my-auto pb-5" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}