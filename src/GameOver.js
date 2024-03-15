import React from "react";

const GameOver = (props) => 
{
    return(
        <div className={`end-container end-container-${props.currentTheme}`}>
            <div className="game-over-msg">Game Over!</div>
            <div>You found <span>{props.count}</span>{props.count===1?' word':' words'}</div>
            
            <input 
            type="text" 
            placeholder="Name" 
            value={props.name}
            onChange={props.handleNameChange}
            />
            <button onClick={ () => props.restartGame(props.name)}>OK</button>
          
        </div>
    )
}


export default GameOver;