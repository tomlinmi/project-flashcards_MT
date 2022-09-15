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
 
        {/* TODO: Implement the screen starting here */}

        <Switch>
<Route exact path = "/">
 <ListDecks />
</Route>

<Route exact path = "/decks/new">
 <CreateDeck />
</Route>

<Route exact path = "/decks/:deckId">
 <ViewDeck />
</Route>

<Route exact path = "/decks/:deckId/cards/new">
<AddCard />
</Route>

<Route exact path = "/decks/:deckId/cards/:cardId/edit">
<EditCard />
</Route>

<Route exact path = "/decks/:deckId/edit">
<EditDeck />
</Route>

<Route exact path = "/decks/:deckId/study">
 <Study />
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

