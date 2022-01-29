import React, { useRef, useState } from "react";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./page/community/home/home";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <div className={styles.page}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
