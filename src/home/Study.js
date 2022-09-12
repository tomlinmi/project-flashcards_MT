import React, { useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import { readDeck } from "../utils/api";
import {Card} from "./Card";
import CardForm from "./CardForm";
import { readCard } from "../utils/api";
import ErrorMessage from "./ErrorMessage";

export const Study = (deck, deckId, card)=> {

  const history = useHistory();

  const handleFlip = async (id) => {

      return //history.push (`/decks/${deck.id}/study`); 
     
    };
 
      
    if (deck){
      return(
  <>
      

<nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><Link to ={`/decks/${deckId}`}>{deck.name} </Link></li> 
        <li class="breadcrumb-item active" aria-current="page">Study</li>
      </ol>
    </nav>
  
  
      <div className="border p-4 h-100 d-flex flex-column">
       <div>
       <p>{deck.cards.length} Cards </p>   //needs to be card x of y
       <h3 className="display-6 mb-6">{deck.name}</h3>
        </div>
  
        <p>{card.front}</p>
   
        <div class="d-grid gap-6 d-md-block">  
      
        <button className="btn btn-secondary"  onClick={()=>handleFlip(card.back)}>  
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


 

          
  