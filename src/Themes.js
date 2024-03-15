import React from "react";


const Themes = (props) =>
{
    return(
    <div className={`theme-container  ${props.showThemes? "bordered": "unbordered"}`}>
       {  props.showThemes?(<div className="opened-themes  animate__animated animate__fadeIn">
        <div onClick={() => props.handleTheme('purple')} className="theme  purple "></div>
        <div onClick={() => props.handleTheme('blue')} className="theme blue"></div>
        <div onClick={() => props.handleTheme('theme-three')} className="theme theme-three"></div>
        <div onClick={() => props.handleTheme('theme-four')} className="theme theme-four"></div></div>):(
    <div onClick={() => props.handleTheme(props.currentTheme)} className={`theme ${props.currentTheme}`}></div>
  )}
     </div>
    )
}


export default Themes;