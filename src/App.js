import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import { showNotify } from './fun/core'
import Notification from './components/Notification'
import Popup from './components/Popup'
import {words} from './fun/data'

// let words = []
let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [playable, setPlayable] = useState(true)
  const [showNotif, setShowNotif] = useState(false)

  useEffect(() => {
    const handleKey = (e) =>{
      const {key, keyCode} = e
      if (playable && keyCode >=65 && keyCode <= 90){
        const letterChoosed = key.toLowerCase()
        if(selectedWord.includes(letterChoosed)) {
          if(!correctLetters.includes(letterChoosed)){
            setCorrectLetters([...correctLetters, letterChoosed])
          }else{
            showNotify(setShowNotif)
          }
        }else{
          if(!wrongLetters.includes(letterChoosed)){
            setWrongLetters([...wrongLetters, letterChoosed])
          }else{
            showNotify(setShowNotif)
          }
        }

      }else{
        if (playable === true){
          alert('Tasto non ammesso - usare solo lettere')
        }
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  },[playable,correctLetters,wrongLetters])

  const playAgain = () => {
    setPlayable(true)
    setWrongLetters([])
    setCorrectLetters([])
    const otherRandWord = Math.floor(Math.random() * words.length)
    selectedWord = words[otherRandWord]
  }

  return (
    <>
    <Header />
    <div className="game-container" style={{width: "100%"}}>
      <WrongLetters wrongLetters={wrongLetters} />
      <Figure wrongLetters={wrongLetters}/>
    </div>
    <Word correctLetters={correctLetters} selectedWord={selectedWord}/>
    <Popup selectedWord={selectedWord} correctLetters={correctLetters}
    wrongLetters={wrongLetters} setPlayable={setPlayable} playAgain={playAgain} />
    <Notification showNotif={showNotif} />    
    </>
  );
}

export default App;
