import React, { useEffect, useState } from 'react'
import './HomePages.scss';
import { Link } from 'react-router-dom';


export const HomePages=() => {
    const [teams,setTeams]=useState([]);
    useEffect(
        ()=>{
            const fetchAllTeams=async()=>{
                const response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const data=await response.json();
               setTeams(data);
                console.log(data);
            };
            fetchAllTeams();
        },[]
    );
    
  return (
   
    <div className='homePages'>
        <div className='homePages'>
        <div className='iplDashboard'><h1>IPL DASHBOARD</h1></div>
        <div className='teamGrid'>
        {teams?.map(team=><h1 className='teamTile' key={team.id}><Link to={`/teams/${team.teamName}`}>{team.teamName}</Link></h1>)}
        </div>
    </div>
    </div>
  )
}
