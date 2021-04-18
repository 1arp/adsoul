import React from "react";
import { useHistory } from "react-router";
import arrow from "../../assets/arrow.svg"

interface AppDetails{
  id:number;
  appName: string;
  publisherName: string;  
}

interface AppCardProps{
  appDetails: AppDetails;
}

export const AppCard:React.FC<AppCardProps> = ({appDetails}) => {

  const  history = useHistory()

  const {id, appName, publisherName} = appDetails

  const handleGoToAppStats = () => {
    history.push(`/app/${id}`,appDetails)
  }

  return(
    <div className="card p-3 p-md-5 pb-4" onClick={handleGoToAppStats}>
      <div className="d-flex">
        <div className="square my-auto"></div>
        <div className="flex-grow-1 ms-3 ">
          <h3 className="mb-1">{appName}</h3>
          <small>{publisherName}</small>
        </div>
        <div className="align-self-start">
          <img src={arrow} alt="" onClick={handleGoToAppStats}/>
        </div>
      </div>

      <div className="d-flex mt-4">
        <div className="me-4">
          Revenue
          <h2>$345</h2>
        </div>
        <div className="mx-1 mx-md-4">
          Ad Requests
          <h2>34M</h2>
        </div>
        <div className="mx-1 mx-md-4">
          Ad Response
          <h2>10M</h2>
        </div>
        <div className="mx-1 mx-md-4">
          Impressions
          <h2>10M</h2>
        </div>
      </div>
    </div>
  )
}

export default AppCard