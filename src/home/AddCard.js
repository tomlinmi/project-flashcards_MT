import React, { useState} from "react"; 

import {useHistory} from "react-router-dom";
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

//*********I am not loading the deck to add this card to

 const handleSubmit = async (event) => { 
    event.preventDefault(); 
    console.log("Submitted:", content); 
    let response =await createCard(content) ; 
   history.push("/");
    setContent({...initialFormState}); 
   return response;
  }; 


  const handleDone = async (id) => {

    return history.push ("/decks/:deckId"); // After done, send the user to the deck screen.
   
 };

  
return ( 
 <CardForm handleDone={handleDone} handleSubmit={handleSubmit} content={content} setContent={setContent}/>
 
)
} 

export default AddCard;