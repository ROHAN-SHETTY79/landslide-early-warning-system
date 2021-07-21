import React, { useState, useEffect } from "react";
// global style
import GlobalStyle from "./components/GlobalStyle";
// pages
import Home from "./pages/Home";
import Visuals from "./pages/Visuals";
import Data from "./pages/Data";
// components
import Nav from "./components/Nav";

// Router
import { Switch, Route, useLocation } from "react-router-dom";
// import this where you do routing for animation process
// animation
// it will detect when we exit the page
import { AnimatePresence } from "framer-motion";

function App() {
  // for exit animation we need a key
  const location = useLocation();
  // for all data
  const [items, setItems] = useState([]);
  // for the recent one
  const [lastItem, setLastItem] = useState([]);
  useEffect(() => {
    const getData1 = () => {
      fetch(
        "https://api.thingspeak.com/channels/1420114/feeds.json?timezone=Asia/Kolkata&results=8000"
      )
        .then((response) => response.json())
        .then((data) => {
          //  all data
          setItems(data.feeds);
          // last updated data
          setLastItem(data.feeds[data.feeds.length - 1]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData1();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home cardItem={lastItem} />
          </Route>
          <Route path="/graph">
            <Visuals />
          </Route>
          <Route path="/dataSet">
            <Data dataSet={items} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
