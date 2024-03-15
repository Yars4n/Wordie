import React from "react";

const Leaderboard = (props) =>
{   
  const sortedPlayers = props.i18n.language === 'en'
  ? props.players.sort((a, b) => b.points - a.points).slice(0, 10)
  : props.i18n.language === 'sr'
      ? props.playersSr.sort((a, b) => b.points - a.points).slice(0, 10)
      : props.i18n.language === 'kr'
      ? props.playersKr.sort((a, b) => b.points - a.points).slice(0, 10)
      : [];

const sortedPlayer = props.i18n.language === 'en'
  ? props.players.sort((a, b) => b.points - a.points).slice(0, 1)
  : props.i18n.language === 'sr'
      ? props.playersSr.sort((a, b) => b.points - a.points).slice(0, 1)
      : props.i18n.language === 'kr'
      ? props.playersKr.sort((a, b) => b.points - a.points).slice(0, 1)
      : [];

    let i = 0;
    return(
     <div className="father-leaderboard">
     {props.showLead===false? 
        <div>
        {props.cleared ==false? <ul onClick={props.handleLeader} className={`one-player one-player-${props.currentTheme}`}>
        {sortedPlayer.map(player => (
            <div className={`row row-${props.currentTheme}`}>
                <div className="rank-container">
                      <div className="rank">{++i}</div>
                 </div>
                <li key={player.id}>{player.name}</li>
                <div className={`score-container score-container-${props.currentTheme}`}>
                      <div className="score">{player.points}</div>
                 </div>
          </div>
        ))}
      </ul>: ''}
      </div>
     :
       <div className={`leaderboard leaderboard-${props.currentTheme} animate__animated animate__zoomIn`}>
       <div className={`leader-text leader-text-${props.currentTheme}`}>Leaderboard</div>
      {props.cleared ==false? <ul className={`all-players all-players-${props.currentTheme}`}>
        {sortedPlayers.map(player => (
            <div className={`row row-${props.currentTheme}`}>
                <div onClick={() => {props.deletePlayer(player.id, props.i18n.language)}} className="rank-container">
                      <div  className="rank">{++i}</div>
                 </div>
                <li key={player.id}>{player.name}</li>
                <div className={`score-container score-container-${props.currentTheme}`}>
                      <div className="score">{player.points}</div>
                 </div>
          </div>
        ))}
      </ul>: ''}
      <div className="leader-buttons">
      <button className="clear-leader" onClick={props.handleClear}>Clear All</button>
      <button className="exit-leader" onClick={props.handleHideLead}>Exit</button>
      </div>
      </div>}
      </div>
     
    
    )
}


export default Leaderboard;