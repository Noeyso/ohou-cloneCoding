import React, { useRef, useState } from "react";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./page/community/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.page}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
