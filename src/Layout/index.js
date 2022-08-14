import React, {Fragment} from "react";
import{Link, Route, Switch, useRouteMatch} from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "../home/ListDecks";
import CreateDeck from "../home/CreateDeck";


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


<Route>
<NotFound />
</Route>

        </Switch>
      </div>
    </>
  );
}

export default Layout;
