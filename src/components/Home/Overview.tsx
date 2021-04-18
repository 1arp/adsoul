import React from "react"
import { Banner } from "./Banner"
import { FeaturesOverview } from "./FeaturesOverview"

export const Overview:React.FC = () => {
  return(
    <div className="w-100 h-screen" style={{color: "white"}}>
      <Banner/>
      <div className="d-none d-xl-block">
        <FeaturesOverview/>
      </div>
    </div>
  )
}

export default Overview