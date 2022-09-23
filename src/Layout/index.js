import React, {Fragment} from "react";
import{Route, Switch} from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "../home/ListDecks";
import CreateDeck from "../home/CreateDeck";
import Study from "../home/Study";
import ViewDeck from "../home/ViewDeck";
import EditDeck from "../home/EditDeck";
import AddCard from "../home/AddCard";
import EditCard from "../home/EditCard";

function Layout() {
  return (
    <>
    
    <Header />
<div className="container">
 
  <Switch>


<Route path = "/decks/new">
 <CreateDeck />
</Route>
    
    
<Route path = "/decks/:deckId/study">
 <Study />
</Route>
    
<Route path = "/decks/:deckId/edit">
<EditDeck />
</Route>
   
    
<Route  path = "/decks/:deckId/cards/new">
<AddCard />
</Route>
   
    
<Route  path = "/decks/:deckId/cards/:cardId/edit">
<EditCard />
</Route>

<Route exact={true} path = "/decks/:deckId">
 <ViewDeck />
</Route>

<Route exact={true} path = "/">
 <ListDecks />
</Route>


<Route>
<NotFound />
</Route>

        </Switch>
        
      </div>
    </>
  );
}

export default Layout;

