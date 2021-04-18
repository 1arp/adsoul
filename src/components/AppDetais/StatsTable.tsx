import React, { useEffect, useState } from "react";
import api from "../../services/api";

interface StatsTableProps {
  id:string;
}

interface Stat {
  date: string;
  clicks: number;
  revenue: number;
  adRequest: number;
  adResponse: number;
  impressions: number;
}

const getRenderRate = (impressions:number, adResponses:number) => (((impressions/adResponses)*100).toFixed(2))

export const StatsTable:React.FC<StatsTableProps> = ({id}) => {

  const [stats, setStats] = useState([])

  useEffect(()=>{
    (async()=>{
      const { data: response } = await api.get(`d734975d2aee62d197ef/${id}`)
      setStats(response)
    })()
  },[id])

  const renderStats = stats.map((stat:Stat) => {
    return(
      <tr key={id + stat.date}>
        <td>{stat.date}</td>
        <td>${stat.revenue}</td>
        <td>{stat.adRequest}</td>
        <td>{stat.adResponse}</td>
        <td>{stat.impressions}</td>
        <td>{stat.clicks}</td>
        <td>{getRenderRate(stat.impressions, stat.adResponse)}%</td>
      </tr>
    )
  })

  return(
    <div className="border pb-5">
      <table className="w-100 text-center" cellPadding="10" cellSpacing="100">
      <tbody>
        <tr>
          <th>Date</th>
          <th>Revenue</th>
          <th>Ad Requests</th>
          <th>Ad Responses</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>Render Rate</th>
        </tr>
          {renderStats}
        </tbody>
      </table>
    </div>
  )
}

export default StatsTable
