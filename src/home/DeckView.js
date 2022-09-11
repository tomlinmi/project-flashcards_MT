import React, { useEffect, useState} from "react";
import { deleteCard, deleteDeck } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import { useParams, useHistory} from "react-router-dom";
import { readDeck } from "../utils/api";
import {Card} from "./Card";

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
       
    const deck= await readDeck(deckId);
    setDeck (deck);

    return history.push (`/decks/${deckId}`); 
 } 
  
};   

const handleEditDeck = async (id) => {

  return history.push (`/decks/${deck.id}/edit`); 
 
};

const handleStudy = async (id) => {

  return history.push (`/decks/${deck.id}/study`); 
 
};

const handleAddCards = async (id) => {

  return history.push (`/decks/${deck.id}/cards/new`); 
 
};


    useEffect(() => {
    
        const abortController = new AbortController();
      
        readDeck(deckId,abortController.signal).then(setDeck).catch(setError);
      
          return () => abortController.abort();
        }, [deckId]);
      
        if (error) {
          return <ErrorMessage error={error} />;
        }
  
      //console.log(deck);
    //Card becomes a child of deckview with below, passing in deck to know the id of the deck to perform history.push
    //need if statement for ensure deck is present before list is executed.

     let list = [];
      if (deck.cards){
        list = deck.cards.map((card) => < Card key={card.id} deck = {deck} deckId={deck.id} card ={card} handleDeleteCard={handleDeleteCard} />);
        console.log(list);
      }

 

    return(
    <>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">{deck.name}</li>
      </ol>
    </nav>


           <main className="container">
    <div className="border p-4 h-100 d-flex flex-column">
     <div>
   
     <h3 className="display-6 mb-6">{deck.name}</h3>
      </div>

      <p>{deck.description}</p>
 
      <div class="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary" onClick={()=>handleEditDeck(deck.id)}>
      Edit
      </button>

      <button className="btn btn-primary" onClick={()=>handleStudy(deck.id)}>
      Study
      </button>

      <button className="btn btn-primary" onClick={()=>handleAddCards(deck.id)}>
      + Add Cards
      </button>
    
      <button className="btn btn-danger" onClick={()=>handleDelete(deck.id)}>
      Delete Deck
      </button>
    
  </div>
    

      <section className="row">{list}</section> 
      </div>
    </main>
    </>
  );


  
}

export default DeckView;
