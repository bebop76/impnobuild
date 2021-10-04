import React from "react";

const WrongLetters = ( {wrongLetters} ) => {
    return(
    <>
    <div className="wrong-letters-container">
        <h2>Errori</h2>
        <div>
            {wrongLetters.map((letter,i)=><span key={i}>{letter}</span>)
            
            }
        </div>
    </div>
    </>
    )
}

export default WrongLetters