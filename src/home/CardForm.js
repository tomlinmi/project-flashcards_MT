import React from "react";

function CardForm({handleDone, handleSave, content, setContent}){ 

   
    const handleChange = ({target}) => { 
      const value = target.value; setContent({ ...content, [target.name]: value, }); }; 
    
         
    return ( 
     
        <form name="create" onSubmit={(event)=>handleSave(event)}> 
       
              <div> 
                <p>Front</p>
             
                <textarea cols={75} resize = "none"
                    id="front" 
                    name="front" 
                    type="text" 
                    placeholder="Front side of the card" 
                    onChange={handleChange} 
                    value={content.front} 
                    />  
                      <p></p>
                </div> 
                         
                 <div> 
                  <p>Back</p>
                
                  <textarea cols={75} resize = "none"
                    id="back" 
                    name="back" 
                    type="text" 
                    placeholder="Back side of the card" 
                    onChange={handleChange} 
                    value={content.back} 
                    /> 
                      <p></p>
                </div> 
                <div> 
                  <button className= "btn btn-secondary" onClick = {handleDone}>
                    
                   Done </button>
      
                  <button type="submit" className= "btn btn-primary" onClick= {handleSave} >Save</button> 
                </div>
            
              
        </form>  ); 
    }
    
        export default CardForm;