import ListDecks from "./ListDecks"
import { deleteDeck } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import {useHistory,useParams } from "react-router-dom";



export const Deck = ({deck , handleDelete})=> {


  const history = useHistory();

      
  if (deck){
    return(


    <div className="border p-4 h-100 d-flex flex-column">
     <div>
     <p>{deck.cards.length} cards </p>
     <h3 className="display-6 mb-6">{deck.name}</h3>
      </div>

      <p>{deck.description}</p>
 
      <div class="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary" onClick={()=>history.push (`/decks/${deck.id}`)}>  
      View
      </button>

      <button className="btn btn-primary" onClick={()=>(deck.id)}>
      Study
      </button>
    
      <button className="btn btn-danger" onClick={()=>handleDelete(deck.id)}>
      Delete Deck
      </button>
     
  
      </div>

      </div>

          
  
  );
    }
    return <ErrorMessage/>;
}

export default Deck;
