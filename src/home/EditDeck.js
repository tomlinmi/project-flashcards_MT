import React, { useEffect, useState} from "react"; 

import {Link, useHistory, useParams} from "react-router-dom";
import {readDeck} from "../utils/api/index";
import DeckForm from "./DeckForm";
import { updateDeck } from "../utils/api/index";


function EditDeck() { 
  
    const initialFormState = { 
        name:"", 
      
        description: "", 
       }; 
      

    const [content, setContent] = useState({...initialFormState}); 
    const history = useHistory();
    const {deckId} = useParams(); 
    const [deck, setDeck] = useState([]);
    


   useEffect(() => {
      async function getDeck() {
        const deck = await readDeck(deckId);  
        setDeck(deck);
        setContent({name:deck.name, description:deck.description});   
      }
  
      getDeck();
    }, [deckId]);
  
 
 
 const handleSubmit = async (event) => { 
    event.preventDefault(); 
    console.log("Submitted:", content); 
const updatedDeck = {...deck, name:content.name, description:content.description}
    await updateDeck(updatedDeck); 

    setContent({...initialFormState}); 
   return history.push(`/decks/${deckId}`)
  }; 

const handleCancel = async()=>{
history.push(`/decks/${deckId}`)};

  
return ( 

<>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><Link to ={`/decks/${deckId}`}>{deck.name} </Link></li> 
         <li class="breadcrumb-item active" aria-current="page">Edit Deck</li>
      </ol>
    </nav>

<h2>Edit Deck</h2>

 <DeckForm handleCancel={handleCancel} handleSubmit={handleSubmit} content={content} setContent={setContent}/>
 </>
)
} 

export default EditDeck;