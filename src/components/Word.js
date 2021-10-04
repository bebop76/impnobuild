import React from "react";

const Word = ( {correctLetters, selectedWord} ) => {
    return (
        <div className="word-container">
    {selectedWord.split('')
    .map( (letter,i) => {
    return(
        <span key={i} className="letter">
            {correctLetters.includes(letter) ? letter : '*'}
        </span>
    )}
    )}
</div>
    )

}

export default Word