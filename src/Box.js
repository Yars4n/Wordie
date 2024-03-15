import React from "react";

const Box  = (props) => {
    return(
      <div className={props.lose? 'box box-off':'box'}>
      {props.boxLetters.map((letter, index) => (
        <div key={index} onClick={() => props.handleLetter(index)} className={`item item-${props.currentTheme}   item-${props.checked[index]}-${props.currentTheme}      ${index} item-${props.colors[index]}`}>
          <div className={`actual-letter actual-letter-${props.currentTheme}`}>{letter}</div>
         
        </div>
      ))}
    </div>
  );
}

export default Box;