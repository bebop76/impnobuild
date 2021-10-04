import React, { useEffect } from "react";
import { checkWin } from "../fun/core";

const Popup = ( {correctLetters, wrongLetters, selectedWord, setPlayable, playAgain} ) => {
    let finalMex = ''
    let showSelctedWord = ''
    let playable = true

    if (checkWin(correctLetters,wrongLetters, selectedWord) === 'win'){
        finalMex = "HAI VINTO :) "
        playable = false
    }

    if (checkWin(correctLetters,wrongLetters, selectedWord) === 'loose'){
        finalMex = "HAI PERSO :("
        showSelctedWord = `La parola da indovinare era: ${selectedWord.toUpperCase()}`
        playable = false
    }

    useEffect (() => setPlayable(playable))

    return(
        <div className="popup-container" style={finalMex !== '' ? {display: 'flex'} : {} }>
            <div className="popup">
                <h2>{finalMex}</h2>
                <h3>{showSelctedWord}</h3>
                <button onClick={playAgain}>RIGIOCA</button>
            </div>
        </div>
    )
}

export default Popup