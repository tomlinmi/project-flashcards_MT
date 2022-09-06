import React, { useEffect, useState} from "react"; 

import {useHistory, useParams} from "react-router-dom";
import {readDeck} from "../utils/api/index";
import { readCard } from "../utils/api/index";
import CardForm from "./CardForm";
import { updateCard } from "../utils/api/index";


function EditCard() { 
  
     
  // When the form is submitted, a new card should be created, and the form contents cleared. 
    
const initialFormState = { 
  front:"", 

  back: "", 
 }; 

const [content, setContent] = useState({...initialFormState}); 
const history = useHistory();


const {deckId} = useParams(); 
const [deck, setDeck] = useState([]);
const {cardId} = useParams();
const[card, setCard]= useState([]);

useEffect(() => {
  async function getDeck() {
    const deck = await readDeck(deckId);  
    setDeck(deck);
    setContent({name:deck.name, description:deck.description});   
  }

  getDeck();
}, [deckId]);

useEffect(() => {
    async function getCard() {
      const card = await readCard(cardId);  
      setDeck(card);
      setContent({front:card.front, back:card.back});   
    }
  
    getCard();
  }, [cardId]);


  const handleCancel = async (id) => {

    return history.push(`/decks/${deckId}`); // After done, send the user to the deck screen.
   
 };

 const handleSubmit = async (event) => { 
    event.preventDefault(); 
    console.log("Submitted:", content); 
    let response =await updateCard(content) ; 
    history.push(`/decks/${deckId}`)
    setContent({...initialFormState}); 
   return response;
  }; 
  
return ( 

<>
<h2>Edit Card</h2>

 <CardForm handleCancel={handleCancel} handleSubmit={handleSubmit} content={content} setContent={setContent}/>
 </>
)
} 

export default EditCard;