import React, { useEffect, useState} from "react"; 

import {useHistory, useParams} from "react-router-dom";
import { readCard } from "../utils/api/index";
import CardForm from "./CardForm";
import { updateCard } from "../utils/api/index";



function EditCard({deckId} ) { 
  
    
const initialFormState = { 
  front:"", 

  back: "", 
 }; 

const [content, setContent] = useState({...initialFormState}); 
const history = useHistory();

const {cardId} = useParams();
const[card, setCard]= useState([]);

useEffect(() => {
    async function getCard() {
      const card = await readCard(cardId);  
      setCard(card);
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
<nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Deck {deckId}</a></li>
         <li class="breadcrumb-item active" aria-current="page">Edit Card: {cardId}</li>
      </ol>
    </nav>



<h2>Edit Card</h2>

 <CardForm handleCancel={handleCancel} handleSubmit={handleSubmit} content={content} setContent={setContent}/>
 </>
)
} 

export default EditCard;