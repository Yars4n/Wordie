import React from "react";

const Home = (props) =>
{
    return(
        <div className="Home">
            <button className="english" onClick={() => props.handleDecision('en')}>English</button>
            <button className="sorani" onClick={() => props.handleDecision('sr')}>کوردی</button>
        </div>
    )
}

export default Home;