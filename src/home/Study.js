import React, { useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import { readDeck } from "../utils/api";
import { readCard } from "../utils/api";
import ErrorMessage from "./ErrorMessage";

export const Study = ()=> {

      
const initialFormState = { 
  front:"", 

  back: "", 
 }; 

const [content, setContent] = useState({...initialFormState}); 
const history = useHistory();



const [deck, setDeck] = useState({cards:[]}); //initialize deck to empty deck of cards
const {deckId} = useParams(); 
const [card, setCard]=useState ({...initialFormState}); 
const [cardIndex, setCardIndex] = useState(0);
const [isFront, setIsFront] = useState (true);



  useEffect(() => {
    async function getDeck() {
      const deck = await readDeck(deckId);  
      setDeck(deck);
      setCard(deck.cards[0]);
    console.log(deck);
    }
 
    getDeck();
  }, [deckId]);


  const handleFlip = async (id) => {

setIsFront((value) => {value = !isFront})// check syntax

      return     
    };

//const nextButton = isFront? "Flip": "Next";  
 
//need to increment the card index

const handleNext = async (id)=>{


return

};
      
    if (deck){
      return(
  <>
      

<nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><Link to ={`/decks/${deckId}`}>{deck.name} </Link></li> 
        <li class="breadcrumb-item active" aria-current="page">Study</li>
      </ol>
    </nav>
  
  
      <div className="border p-4 h-100 d-flex flex-column">
       <div>
       <p>{deck.cards.length} Cards </p>   //needs to be card x of y
       <h3 className="display-6 mb-6">{deck.name}</h3>
        </div>
  
        <p>{isFront? card.front: card.back}</p>
   
        <div class="d-grid gap-6 d-md-block">  
      
        <button className="btn btn-secondary"  onClick={()=>handleFlip()}>  
     Flip
      </button> 
{!isFront &&

      <button className="btn btn-primary"  onClick={()=>handleNext()}>  
   Next
      </button> 
    }
    
        </div>
  
        </div>
  </>
            
    
    );
      }
      return <ErrorMessage/>;
  }

      

export default Study;


 

          
  