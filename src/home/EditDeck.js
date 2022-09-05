import React, { useState} from "react"; 

import {useHistory, useParams} from "react-router-dom";
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
    

//***missing update deck handler */
 
 const handleSubmit = async (event) => { 
    event.preventDefault(); 
    console.log("Submitted:", content); 
    let response =await readDeck(deckId,content) ; 

    setContent({...initialFormState}); 
   return response;
  }; 

const handleCancel = async()=>{
history.push("/")};

  
return ( 

<>
<h2>Edit Deck</h2>

 <DeckForm handleCancel={handleCancel} handleSubmit={handleSubmit} content={content} setContent={setContent}/>
 </>
)
} 

export default EditDeck;