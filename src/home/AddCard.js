import React, { useEffect, useState} from "react"; 

import {useHistory, useParams} from "react-router-dom";
import {readDeck} from "../utils/api/index";
import {createCard} from "../utils/api/index";

import CardForm from "./CardForm";

function AddCard() { 
  
  // When the form is submitted, a new card should be created, and the form contents cleared. 
    
const initialFormState = { 
  front:"", 

  back: "", 
 }; 

const [content, setContent] = useState({...initialFormState}); 
const history = useHistory();
const [deck, setDeck] = useState([]);
const {deckId} = useParams(); 
    


useEffect(() => {
   async function getDeck() {
     const deck = await readDeck(deckId);  
     setDeck(deck);
   
   }

   getDeck();
 }, [deckId]);


 const handleSave = async (event) => { 
    event.preventDefault(); 
    console.log("Submitted:", content); 
    let response =await createCard(deckId, content) ; 
  
    setContent({...initialFormState}); 
   return response;
  }; 


  const handleDone = async (id) => {

    return history.push (`/decks/${deckId}`); // After done, send the user to the deck screen.
   
 };

  
return ( 
  <>
    <div>
        <h2>React Router: Add Card</h2>
        </div>
 <CardForm handleDone={handleDone} handleSave={handleSave} content={content} setContent={setContent}/>
 </>
)
} 

export default AddCard;