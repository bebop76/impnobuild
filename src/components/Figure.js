import React from "react";

const Figure = ( {wrongLetters} ) => {
    const numErrori = wrongLetters.length
    const coloriErr = ["white","green","olive","yellow","orange","red"]
    return(
        <>
        <div className="figura-container">

        <svg height="100%" width="100%" className="figure-container">
            {/* <!--patibolo--> */}
            <line x1="60" y1="20" x2="140" y2="20"/>
            <line x1="140" y1="20" x2="140" y2="50"/>
            <line x1="60" y1="60" x2="100" y2="20"/>
            <line x1="60" y1="20" x2="60" y2="230"/>
            <line x1="20" y1="230" x2="100" y2="230"/>
            {/* <!--testa--> */}
            {numErrori > 0 && <circle cx="140" cy="70" r="20" stroke={coloriErr[numErrori]} />}
            
            {/* <!--corpo--> */}
            {numErrori > 1 && <line x1="140" y1="90" x2="140" y2="150" stroke={coloriErr[numErrori]} />}
            {/* <!--braccia--> */}
            {numErrori > 2 && <line x1="140" y1="120" x2="120" y2="100" stroke={coloriErr[numErrori]} />}
            {numErrori > 3 && <line x1="140" y1="120" x2="160" y2="100" stroke={coloriErr[numErrori]}/>}
            {/* <!--gambe--> */}
            {numErrori > 4 && <line x1="140" y1="150" x2="120" y2="180" stroke={coloriErr[numErrori]}/>}
            {numErrori > 5 && <line x1="140" y1="150" x2="160" y2="180" stroke={coloriErr[numErrori]}/>}
        </svg>

        </div>
        </>
    )
}

export default Figure