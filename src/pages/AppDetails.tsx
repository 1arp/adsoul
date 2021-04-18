import React from "react";
import arrow from "../assets/arrow.svg"
import { Redirect, useHistory, useLocation, useParams } from "react-router";
import { StatsTable } from "../components/AppDetais/StatsTable";

interface AppDetailsProps{
  id: number;
  appName: string;
  publisherName:  string;
}

export const AppDetails :React.FC<AppDetailsProps | any> = (props) => {
  const {id} = useParams<{id:string}>()
  const history = useHistory()
  
  const handleGoToHome = () => {
    history.push('/')
  }
  const location = useLocation()

  //can also handle by getting details of all the apps and then filtering by id
  if(!location.state){
    return(
      <Redirect to="/"/>
    )
  }

  //@ts-ignore
  const {appName, publisherName} = location.state

  return(
    <div className="">
        <div className="ps-5 p-4 backgroundPrimary" style={{color: "white"}}>
          <h4>A D S O U L</h4>
        </div>
      <div className="d-flex my-5 mx-5">
        <img src={arrow} className="rotate180" alt="" onClick={handleGoToHome}/>      
        <div className="square ms-4 me-2"></div>
        <div className="">
          <h4 className="mb-1">{appName}</h4>
          <small>{publisherName}</small>
        </div>
      </div>

      <div className="mx-5">
        <StatsTable id={id}/>
      </div>
    </div>
  )
}

export default AppDetails