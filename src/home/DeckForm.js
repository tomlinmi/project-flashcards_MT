import React from "react";

function DeckForm({handleSubmit, handleCancel, content, setContent}){ 
 

const handleChange = ({target}) => { 
  const value = target.value; setContent({ ...content, [target.name]: value, }); }; 


return ( 
 
    <form name="create/edit" onSubmit={(event)=>handleSubmit(event)}> 
    
          <div> 
            <p>Name</p>
         
              <input cols={75} resize = "none"
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
            
              <textarea cols={75} resize = "none"
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
              <button className= "btn btn-secondary" onClick = {handleCancel}>
                
                Cancel </button>
  
              <button type="submit" className= "btn btn-primary" onClick = {handleSubmit} >Submit</button> 
            </div>
        
          
    </form>  ); 
}

    export default DeckForm;