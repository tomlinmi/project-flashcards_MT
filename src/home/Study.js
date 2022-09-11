import React from "react";
import ErrorMessage from "./ErrorMessage";
import {useParams, useHistory} from "react-router-dom";


export const Study = ({deck, deckId, card, cardId})=> {


  const history = useHistory();
      
  if (deck){
    return(


      <>

<nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">{deck.name}</a></li>
         <li class="breadcrumb-item active" aria-current="page">Study</li>
      </ol>
    </nav>
    <div>
    <h3 className="display-6 mb-6">Study: {deck.name}</h3>
    </div>

       <div className="border p-4 h-100 d-flex flex-column">
     <div>
     <p>{deck.cards.length} Cards </p>   //needs to be card x of y
   
      </div>

      <p>{card.front}</p>
 
      <div class="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary" onClick={()=>history.push (card.back)}>  
      Flip
      </button>    
  
      </div>

      </div>

    </>      
  
  );
    }
    return <ErrorMessage/>;
}

export default Study;


 

          
  