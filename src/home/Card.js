import DeckView from "./DeckView";
import ErrorMessage from "./ErrorMessage";
import {useHistory,useParams } from "react-router-dom";
import Deck from "./Deck";
export const Card = ({deck, card , handleDeleteCard})=> {
const history = useHistory();

      
  if (card){
    return(


    <div className="border p-4 h-100 d-flex flex-column">
     <div>
        <h2 className="display-6 mb-6">Cards</h2>
      </div>
 

      <p>{card.front}</p>
      <p>{card.back}</p>
 
      <div class="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary" onClick={()=>history.push (`/deck/${deck.id}/cards/${card.id}/edit`)}>  
     Edit
      </button>
    
      <button className="btn btn-danger" onClick={()=>handleDeleteCard(card.id)}>
      Delete Card
      </button>
     
  
      </div>

      </div>

  
  );
    }
    return <ErrorMessage/>;
}

export default Card;
