import React from "react";
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
import icon4 from "../../assets/icon4.svg"


export const FeaturesOverview:React.FC = () => {
  return(
    <div className="backgroundSecondary w-100 h-screen-50">
    <div className="d-flex flex-column justify-content-evenly h-100">

      <div className="ms-5 ps-3">
        <h2>Revenue Optimization</h2>
      </div>

      <div className="d-flex justify-content-around align-items-center">
        <div className="">
          <img src={icon1} className="d-block mb-4" alt=""/>
          Fill Rate
        </div>
        <div className="">
          <img src={icon2} className="d-block mb-4" alt=""/>
          Improve CTR
        </div>
      </div>

      <div className="d-flex justify-content-around align-items-center">
        <div className="">
          <img src={icon3} className="d-block mb-4" alt=""/>
          Refresh Rate
        </div>
        <div className="">          
          <img src={icon4}  className="d-block mb-4" alt=""/>
          Quick Integration
        </div>
      </div>

      </div>
    </div>
  )
}