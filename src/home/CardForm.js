import {useHistory} from "react-router-dom";


function CardForm({handleSubmit, content, setContent}){ 

  const history = useHistory(); 


    const handleDone = async (id) => {

        return history.push ("/decks/:deckId"); // After done, send the user to the deck screen.
       
     };

    const handleChange = ({target}) => { 
      const value = target.value; setContent({ ...content, [target.name]: value, }); }; 
    
     
    
    return ( 
     
        <form name="create" onSubmit={(event)=>handleSubmit(event)}> 
         <div>
        <h2>React Router: Add Card</h2>
        </div>
              <div> 
                <p>Front</p>
             
                <textarea 
                    id="front" 
                    name="front" 
                    type="text" 
                    placeholder="Brief description of the card" 
                    onChange={handleChange} 
                    value={content.front} 
                    />  
                      <p></p>
                </div> 
                         
                 <div> 
                  <p>Back</p>
                
                  <textarea 
                    id="back" 
                    name="back" 
                    type="text" 
                    placeholder="Brief description of the card" 
                    onChange={handleChange} 
                    value={content.back} 
                    /> 
                      <p></p>
                </div> 
                <div> 
                  <button className= "btn btn-secondary" onClick = {handleDone}>
                    
                   Done </button>
      
                  <button type="submit" className= "btn btn-primary" >Save</button> 
                </div>
            
              
        </form>  ); 
    }
    
        export default CardForm