export function showNotify(set) {
    set(true)
    setTimeout(() => {
        set(false)
    },2500)

}

export function checkWin(correctLetters,wrongLetters, selectedWord){
    let status = 'win'

    selectedWord.split('').forEach(letter => {
        if(!correctLetters.includes(letter)){
            status = 'dontKnow'
        }
    });

        if(wrongLetters.length === 6){
            status = 'loose'
        }
        return status

}