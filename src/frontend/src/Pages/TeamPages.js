import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'
import { useParams } from 'react-router-dom';
import './TeamPages.scss';
import { Link } from 'react-router-dom';

export const TeamPages=() => {
    const [team,setTeam]=useState({matches:[]});
    const {teamName,year}=useParams();
    useEffect(
        ()=>{
            const fetchMatches=async()=>{
                const response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
                const data=await response.json();
               setTeam(data);
                console.log(data);
            };
            fetchMatches();
        },[teamName,year]
    );
    if(!team || !team.teamName){
        return <h1>Team Not Found</h1>;
    }
  return (
   
    <div className='teamPages'>
    <div className='teamName'>
    <h1 className='teamNameSection'>{team.teamName}</h1>
    </div>
    <div className='winLoss'>
        <img src="data:image/png;base64,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" alt="logo" />
        
        </div>
    
    <div className='matchDetailCard'>
    <h3>Latest Matches</h3>
    <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
    </div>
    {team.matches?.slice(1).map(match=><MatchSmallCard key={match.matchId} team={team.teamName} match={match}/>)}
    <div className='more'>
    <Link to={`/teams/${teamName}/match/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
    </div>
</div>
  )
}
