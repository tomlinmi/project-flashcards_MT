import React, {Fragment} from "react";
import{Link, Route, Switch, useRouteMatch, useParams,} from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "../home/ListDecks";
import CreateDeck from "../home/CreateDeck";
import Deck from "../home/Deck";
import Study from "../home/Study";
import DeckView from "../home/DeckView";

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

<Route path = "/decks/new">
 <CreateDeck />
</Route>

<Route path = "/decks/:deckId">
 <DeckView />
</Route>

<Route path = "/decks/:deckId/study">
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
