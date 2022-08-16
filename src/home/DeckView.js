import React, { useEffect, useState} from "react";
import { deleteDeck } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import {useHistory, useParams, } from "react-router-dom";
import { readDeck } from "../utils/api";
import {Deck} from "./Deck";
export const DeckView = ({handleDelete})=> {
   
        const [decks, setDecks] = useState([]);
        const [error, setError] = useState(undefined);

const handleViewDeck = async (id) => {
            
            const viewDeck= await readDeck();
            setDecks (readDeck);
          };

    useEffect(() => {
 
        const abortController = new AbortController();
      
          readDeck(abortController.signal).then(setDecks).catch(setError);
      
          return () => abortController.abort();
        }, []);
      
        if (error) {
          return <ErrorMessage error={error} />;
        }
       
        const list = decks.map((deck) => < Deck key={deck.id} deck={deck} handleDelete={handleDelete} />);
console.log(list);
      

    return(


    <div className="border p-4 h-100 d-flex flex-column">
     <div>
   
     <h3 className="display-6 mb-6">{deck.name}</h3>
      </div>

      <p>{deck.description}</p>
 
      <div class="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary" onClick={()=>(deck.id)}>
      Edit
      </button>

      <button className="btn btn-primary" onClick={()=>(deck.id)}>
      Study
      </button>

      <button className="btn btn-primary" onClick={()=>(deck.id)}>
      + Add Cards
      </button>
    
      <button className="btn btn-danger" onClick={()=>handleDelete(deck.id)}>
      Delete Deck
      </button>
     
  
      </div>
      <div>
      <h2 className="display-6 mb-6">Cards</h2>
      </div>
      <div class="d-grid gap-6 d-md-block"> 

      <section className="row">{list}</section>

      <button className="btn btn-secondary" onClick={()=>(deck.id)}>
      Edit
      </button>

      <button className="btn btn-danger" onClick={()=>handleDelete(deck.id)}>
      Delete Deck
      </button>

      </div>

      </div>
        
  );
  
  
}

export default DeckView;
