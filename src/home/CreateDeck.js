import React, { useState} from "react"; 
import {createDeck} from "../utils/api/index";
import {useHistory} from "react-router-dom";


function CreateDeck({createDeck}) { 
  
  // When the form is submitted, a new deck should be created, and the form contents cleared. 
    
const initialFormState = { 
  name:"", 

  description: "", 
 }; 

const [content, setContent] = useState({...initialFormState}); 
const history = useHistory();
const handleChange = ({target}) => { 
  const value = target.value; setContent({ ...content, [target.name]: value, }); }; 


 const handleSubmit = async (event) => { 
    event.preventDefault(); 
    console.log("Submitted:", content); 
    let response =await createDeck(content) ; 
   history.push("/");
    setContent({...initialFormState}); 
   return response;
  }; 

  
return ( 
 
  <form name="create" onSubmit={(event)=>handleSubmit(event)}> 
   <div>
  <h2>Create Deck</h2>
  </div>
        <div> 
          <p>Name</p>
       
            <input 
              id="name" 
              name="name" 
              type="text" 
              placeholder="Name" 
              onChange={handleChange} 
              value={content.name} 
              /> 
                <p></p>
          </div> 
                   
           <div> 
            <p>Description</p>
          
            <textarea 
              id="description" 
              name="description" 
              type="text" 
              placeholder="Brief description of the deck" 
              onChange={handleChange} 
              value={content.description} 
              /> 
                <p></p>
          </div> 
          <div> 
            <button type = "submit">Cancel </button>

            <button type="submit">Submit</button> 
          </div>
      
        
  </form>  ); 
 
} 

export default CreateDeck;