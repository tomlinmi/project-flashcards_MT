import React, { useEffect, useState} from "react"; 
import {Link, useHistory, useParams} from "react-router-dom";
import { readCard } from "../utils/api/index";
import CardForm from "./CardForm";
import { updateCard } from "../utils/api/index";
import {readDeck} from "../utils/api/index";


function EditCard() { 
  
    
const initialFormState = { 
  front:"", 

  back: "", 
 }; 

const [content, setContent] = useState({...initialFormState}); 
const history = useHistory();

const {cardId} = useParams();
const[card, setCard]= useState([]);

const [deck, setDeck] = useState([]);
const {deckId} = useParams(); 

useEffect(() => {
    async function getCard() {
      const card = await readCard(cardId);  
      setCard(card);
      setContent({front:card.front, back:card.back});   
    }
  
    getCard();
  }, [cardId]);



  useEffect(() => {
    async function getDeck() {
      const deck = await readDeck(deckId);  
      setDeck(deck);
    
    }
 
    getDeck();
  }, [deckId]);
 

  const handleDone = async (id) => {

    return history.push(`/decks/${deckId}`); // After done, send the user to the deck screen.
   
 };


  const handleSave = async (event) => { 
    event.preventDefault(); 
    console.log("Saving:", content); 
    const updatedCard = {...card, front:content.front, back:content.back}
   await updateCard(updatedCard) ; 
      setContent({...initialFormState}); 
   return   history.push(`/decks/${deckId}`)
  }; 

  
return ( 

<>
<nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item"><Link to ={`/decks/${deckId}`}>Deck {deckId}  </Link></li> 
         <li className="breadcrumb-item active" aria-current="page">Edit Card: {cardId}</li>
      </ol>
    </nav>



<h2>Edit Card</h2>

 <CardForm handleDone={handleDone} handleSave={handleSave} content={content} setContent={setContent}/>
 </>
)
} 

export default EditCard;