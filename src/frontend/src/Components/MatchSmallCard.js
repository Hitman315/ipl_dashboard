import React from 'react'
import {Link} from 'react-router-dom'
import './MatchSmallCard.scss'
export const MatchSmallCard=({match,teamName})=> {
  const otherTeam= match.team1===teamName ? match.team2 : match.team1;
    const otherTeamRoute=`/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;
    return (
      <div className={isMatchWon ? 'matchSmallCard won-card' : 'matchSmallCard lost-card'}>
              <span className="vs">vs</span>
          <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
  
          <p className='matchResult'>{match.winningTeam} won by {match.margin} {match.wonBy}</p>
      </div>
    )
}
