import React from "react";
import CountdownBar from "./CountdownBar";
import { useTranslation } from "react-i18next";

const Up = (props) => {

    const { t } = useTranslation();

    return (
        <div className="Up-container ">
            <div className="letter--container">
                <div className={`swap-box ${props.i18n.language==='sr'? "swap-box-sr":""} swap-box-${props.currentTheme}`}>
                    <div>{t('swap')}</div>
                    <p>{props.swaps}</p>
                </div>

                <div className="letter--container ">
                    <div className={`letter letter-${props.currentTheme}`}>{props.letter}</div>
                    <div className={`next-letter next-letter-${props.currentTheme}`}>{props.nextLetter}</div>
                </div>
            </div>
            <CountdownBar key={props.startTime} duration={props.time} isLost={props.isLost} currentTheme = {props.currentTheme}/>
        </div>
    )
}


export default Up;