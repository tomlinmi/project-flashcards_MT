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
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Deck {deckId} </a></li>
         <li class="breadcrumb-item active" aria-current="page">Edit Card: {cardId}</li>
      </ol>
    </nav>



<h2>Edit Card</h2>

 <CardForm handleDone={handleDone} handleSave={handleSave} content={content} setContent={setContent}/>
 </>
)
} 

export default EditCard;