import React from "react";
import memesData from "../memesData";

export default function Form() {
    const [url, setUrl] = React.useState("")
    function displayMeme()
    {
        const memeArray= memesData.data.memes;
        const randomIndex = Math.floor(Math.random()*memeArray.length)

        setUrl(memeArray[randomIndex].url)
    }
    return (
        <div className="form--container">
            <div className="form--inputs">
                <input type="text" placeholder="Top Text"></input>
                <input type="text" placeholder="Bottom Text"></input>
            </div>
            <div className="form--button">
                <button type="" className="form-button" onClick={displayMeme}>Get a new meme image</button>
            </div>
            <img src={url} alt="there" className="memes"></img>
        </div>
    )
}