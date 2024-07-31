import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "img/helmet-1.png", matched: false},
  {"src": "img/potion-1.png", matched: false},
  {"src": "img/ring-1.png", matched: false},
  {"src": "img/scroll-1.png", matched: false},
  {"src": "img/shield-1.png", matched: false},
  {"src": "img/sword-1.png", matched: false}
]
function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disable, setDisable] = useState(false)

  const newGame = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
     //if random number is bigger then 0.5 thah will return true so the first cardImages is sorted by another,
    // and this thing happend for each item so we have a 12 random item
    .map((card) =>({...card, "id": Math.random}) )
    // add a random id to each item   
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }
  const handelChoice = (card) =>{
    console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisable(true)
      if( choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src == choiceOne.src){ // in this case the both item that are same, the matched value is true
              return {...card, matched:true}
            } else return card
            
          })
        })
        console.log("Match")
        resetTurn()
      } else{
          console.log("Not Match")   
          setTimeout(()=> resetTurn(), 1000) // we do this because if resetTurn function is called fast,
          // the choiceTwo is not see by user because its will reset and the before the class changed  choices are empty so the if for changing the class is not used 
          
      }
      
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn + 1)
    setDisable(false)
  }

  useEffect(()=>{
    newGame()
  }, [])
  return (
    <div className='App'>
      <h1>memory game</h1>
      <button onClick={newGame}>new game</button>
      <div className="card-grid">
        {cards.map(card =>(
          <SingleCard 
          key={card.id } 
          card={card}
          handelChoice={handelChoice}
          flipped = {card ===  choiceOne || card === choiceTwo || card.matched}
          disable={disable}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );  
}

export default App;
