import React from "react";

import { readDeck } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import {useParams} from "react-router-dom";


export const Study = ({readDeck})=> {

      
  if (readDeck){
    return(


    <div className="border p-4 h-100 d-flex flex-column">
     <div>
    
     <h3 className="display-6 mb-6">{readDeck.name}</h3>
      </div>
      <p>Card {readDeck.card.id} of {readDeck.cards.length}</p>
      <p>{readDeck.description}</p>
 
      <div class="d-grid gap-6 d-md-block">  
      <button className="btn btn-secondary" onClick={()=>(readDeck.id)}>
     Flip
      </button>  
      </div>

      </div>

          
  
  );
    }
    return <ErrorMessage/>;
}

export default Study;