
function CardForm({handleSubmit, content, setContent}){ 

    


    const handleDone = async (id) => {

        return history.push ("/decks/:deckId"); // After done, send the user to the deck screen.
       
     };

    const handleChange = ({target}) => { 
      const value = target.value; setContent({ ...content, [target.name]: value, }); }; 
    
    
    return ( 
     
        <form name="create" onSubmit={(event)=>handleSubmit(event)}> 
         <div>
        <h2>Add Card</h2>
        </div>
              <div> 
                <p>Front</p>
             
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
                  <p>Back</p>
                
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
                  <button className= "btn btn-secondary" onClick = {handleDone}>
                    
                   Done Cancel </button>
      
                  <button type="submit" className= "btn btn-primary" >Submit</button> 
                </div>
            
              
        </form>  ); 
    }
    
        export default CardForm