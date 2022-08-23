import React, { useEffect, useState} from "react";
import { deleteCard, deleteDeck } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import { useParams, useHistory} from "react-router-dom";
import { readDeck } from "../utils/api";


export const DeckView = ()=> {
   
        const [deck, setDeck] = useState([]);
        const [error, setError] = useState(undefined);
        const {deckId} = useParams(); 
        const history = useHistory(); 
      
const handleDelete = async (id) => {
  const result = window.confirm("Delete this deck?");
 if (result) {
    await deleteDeck(id);
    return history.push ("/"); 
 } 
  
};     

const handleDeleteCard = async (id) => {
  const result = window.confirm("Delete this card?");
 if (result) {
    await deleteCard(id);
    return history.push (`/decks/${deckId}`); 
 } 
  
};   

    useEffect(() => {
    
        const abortController = new AbortController();
      
        readDeck(deckId,abortController.signal).then(setDeck).catch(setError);
      
          return () => abortController.abort();
        }, [deckId]);
      
        if (error) {
          return <ErrorMessage error={error} />;
        }
       
     // const list = deck.cards.map((card) => < Card key={card.id} card={card} handleDeleteCard={handleDeleteCard} />);
//console.log(list);




console.log(deck);

    return(


      <main className="container">
    <div className="border p-4 h-100 d-flex flex-column">
     <div>
   
     <h3 className="display-6 mb-6">{deck.name}</h3>
      </div>

      <p>{deck.description}</p>
 
      <div class="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary" onClick={()=>`/decks/${deckId}/edit`}>
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
    

      <section className="row"></section>
      </div>
    </main>
  );


  
}

export default DeckView;
