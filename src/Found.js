import React from "react";
 
import 'animate.css';


const Found = (props) => {


    const [animate, setAnimate] = React.useState(false);
    const [tempWord, setTempWord] = React.useState('')
    const [textColor, setTextColor] = React.useState("red");

    React.useEffect(() => {

        if (props.word !== tempWord) {
            // Trigger the animation by updating the state after a short delay
            setAnimate(true);
            setTextColor("rgb(0, 186, 102)"); // Change text color during animation
            setTimeout(() => {
              setAnimate(false);
              setTextColor(`var(--light-${props.currentTheme})`); // Revert text color after animation stops
            }, 1000); // Adjust the delay as needed
          }
 
          setTempWord(props.word);
    }, [props.word, props.currentTheme], );

    

    return (
    <div className="message">
        <div className={`word-container ${props.i18n.language==='sr'? "word-container-sr":""} word-container-${props.currentTheme}`}>
        <div className={`word ${props.i18n.language==='sr'? "word-sr":""} word-${props.currentTheme} animate__animated ${animate ? "animate__flash" : ""}`} style={{ color: textColor }}>
        {props.word}
      </div>
      </div>
        <div className={`count count-${props.currentTheme} animate__animated ${animate ? "animate__pulse" : ""}`}>{props.count}</div>
      
    </div>
    )
}


export default Found;