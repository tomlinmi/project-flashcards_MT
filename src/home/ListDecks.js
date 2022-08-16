import React, { useEffect, useState} from "react";
import {listDecks} from "../utils/api/index";
import ErrorMessage from "./ErrorMessage";
import { Deck } from "./Deck";
import {useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

import{createDeck} from "../utils/api/index";

const ListDecks = ()=>{
const [decks, setDecks] = useState([]);
const [error, setError] = useState(undefined);

const history = useHistory();

   
const handleDelete = async (id) => {
    const result = window.confirm("Delete this deck?");
   if (result) {
      await deleteDeck(id);
    
    const deckList= await listDecks();
    setDecks (deckList);
 
     return history.push ("/"); 
   } 
    
  };

useEffect(() => {
 
  const abortController = new AbortController();

    listDecks(abortController.signal).then(setDecks).catch(setError);

    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }
 
  const list = decks.map((deck) => < Deck key={deck.id} deck={deck} handleDelete={handleDelete} />);
console.log(list);

 

const handleCreate = async (id) => {

   return history.push ("/decks/new"); // After the create, send the user to the home page.
  
};


  return (
    <main className="container">
        <button className="btn btn-secondary" onClick={handleCreate}>
          +Create Deck
        </button>
      <section className="row">{list}</section>
    </main>
  );
};


export default ListDecks;