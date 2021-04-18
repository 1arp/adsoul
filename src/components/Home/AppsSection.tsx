import React, { useEffect, useState } from "react";
import api from "../../services/api";
import AppCard from "./AppCard";

export const AppsSection:React.FC = () => {

  const [apps, setApps] = useState([])

  useEffect(()=>{
    (async()=>{
       const {data: response} = await api.get("/54d09df281f91e8c146f")
       setApps(response)
    })()
  },[])

  const renderAppCards = apps.map((app:any) => {
    return(
      <div className="m-4">
        <AppCard key={app.id} appDetails={app}/>
      </div>
    )
  })

  return(
    <div className="overflow-scrolly m-1 m-md-4">
      {renderAppCards}
    </div>
  )
} 