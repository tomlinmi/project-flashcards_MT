import React, { useState} from "react"; 

import {useHistory} from "react-router-dom";
import {createDeck} from "../utils/api/index";
import DeckForm from "./DeckForm";

function CreateDeck() { 
  
  // When the form is submitted, a new deck should be created, and the form contents cleared. 
    
const initialFormState = { 
  name:"", 

  description: "", 
 }; 

const [content, setContent] = useState({...initialFormState}); 
const history = useHistory();

//const handleChange = ({target}) => { 
  //const value = target.value; setContent({ ...content, [target.name]: value, }); }; 


 const handleSubmit = async (event) => { 
    event.preventDefault(); 
    console.log("Submitted:", content); 
    let response =await createDeck(content) ; 
   history.push("/");
    setContent({...initialFormState}); 
   return response;
  }; 

const handleCancel = async()=>{
history.push("/")};

  
return ( 
<>
  <div>
  <h2>Create Deck</h2>
  </div>

 <DeckForm handleCancel={handleCancel} handleSubmit={handleSubmit} content={content} setContent={setContent}/>
 </>
)
} 

export default CreateDeck;