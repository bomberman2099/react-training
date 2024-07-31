import './SingleCard.css'

export default function SingleCard({card, handelChoice, flipped, disable}){
  const handelClick = () => {
    if(!disable){
      handelChoice(card)
    }
  }
    return(
    <div className="card" >
      <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt="card front" />
        <img 
          className='back' 
          src="img/cover.png" onClick={handelClick} 
          alt="card back" 
        />
      </div>
    </div> 
    );
}