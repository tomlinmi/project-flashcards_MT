import React from "react";
import ErrorMessage from "./ErrorMessage";
import {useHistory } from "react-router-dom";


export const Deck = ({deck , handleDelete, handleStudy})=> {


  const history = useHistory();

      
  if (deck){
    return(
<>
    

    <div className="border p-4 h-100 d-flex flex-column">
     <div>
     <h7 className = "mb-2 text-muted float-right">{deck.cards.length} cards</h7>
  
     <h3 className="display-6 mb-6">{deck.name}  </h3>
       </div>

      <p>{deck.description}</p>
 
      <div className="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary mr-2" onClick={()=>history.push (`/decks/${deck.id}`)}>  
      View
      </button>

      <button className="btn btn-primary mr-2" onClick={()=>handleStudy(deck.id)}>
      Study
      </button>
    
      <button className="btn btn-danger float-right" onClick={()=>handleDelete(deck.id)}>
      Delete Deck
      </button>
     
  
      </div>

      </div>
</>
          
  
  );
    }
    return <ErrorMessage/>;
}

export default Deck;
