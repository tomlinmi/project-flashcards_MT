import React, { useState} from "react"; 

import {useHistory, useParams} from "react-router-dom";
import {readDeck} from "../utils/api/index";
import DeckForm from "./DeckForm";

function EditDeck() { 
  
    const initialFormState = { 
        name:"", 
      
        description: "", 
       }; 
      

    const [content, setContent] = useState({...initialFormState}); 
    const history = useHistory();
    const {deckId} = useParams(); 
    


 
 const handleSubmit = async (event) => { 
    event.preventDefault(); 
    console.log("Submitted:", content); 
    let response =await readDeck(deckId,content) ; 
   history.push("/");
    setContent({...initialFormState}); 
   return response;
  }; 

const handleCancel = async()=>{
history.push("/")};

  
return ( 
 <DeckForm handleCancel={handleCancel} handleSubmit={handleSubmit} content={content} setContent={setContent}/>
 
)
} 

export default EditDeck;