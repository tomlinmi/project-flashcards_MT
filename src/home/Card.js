import React from "react";
import ErrorMessage from "./ErrorMessage";
import {useHistory} from "react-router-dom";

//pull in props from deckview list variable

export const Card = ({deckId, card , handleDeleteCard})=> {
const history = useHistory();


const handleEditCard = async (id) => {

  return history.push (`/decks/${deckId}/cards/${card.id}/edit`); 
 
};

      
  if (card){
    return(


    <div className="border p-4 h-100 d-flex flex-column">
     <div>
        <h2 className="display-6 mb-6">Cards</h2>
      </div>
 

      <p>{card.front}</p>
      <p>{card.back}</p>
 
      <div className="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary mr-2" onClick={()=>handleEditCard(card.id)}>  
     Edit
      </button>
    
      <button className="btn btn-danger mr-2" onClick={()=>handleDeleteCard(card.id)}>
      Delete Card
      </button>
     
  
      </div>

      </div>

  
  );
    }
    return <ErrorMessage/>;
}

export default Card;
