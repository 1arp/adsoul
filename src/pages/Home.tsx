import React from "react";
import { AppsSection } from "../components/Home/AppsSection";
import Overview from "../components/Home/Overview";
import settingsIcon from "../assets/settings.svg"

export const Home:React.FC = () => {
  
  return(
    <div className="row">
      <div className="col-xl-6 pe-0">
        <Overview/>
      </div>
      <div className="col-xl-6 backgroundGrey ps-0">
        <div className="bg-white">
        <div className="d-flex justify-content-between align-items-end bg-white mx-5 h-screen-15">
          <div className="my-3"><h1>Apps</h1></div>
          <div className="my-3"><img src={settingsIcon} className="my-3" alt=""/></div>
        </div>
        </div>
        <div className="">
          <AppsSection/>
        </div>
      </div>
    </div>
  )
} 

export default Home