import React from "react";
import { useParams } from "react-router";

export const AppDetails: React.FC = () => {
  const {id} = useParams<{id:string}>()
  return(
    <div className="">{id}</div>
  )
}