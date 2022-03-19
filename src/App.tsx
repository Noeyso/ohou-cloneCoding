import React, { useEffect, useRef, useState } from "react";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./page/community/home/home";
import Footer from "./components/footer/footer";
import SubHeader from "./components/header/subHeader/subHeader";

function App() {
  /*
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [isUp, setIsUp] = useState(false);
  const delta = 5;

  function updateScroll() {
    console.log(`scrollTop: ${document.documentElement.scrollTop}`);
    //setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    setIsScroll(true);
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    console.log(`isUp : ${isUp}`);
    const scrollTimer = setInterval(() => {
      if (isScroll) {
        hasScrolled();
        setIsScroll(false);
        console.log("h");
      }
    }, 250);
    return () => clearInterval(scrollTimer);
  }, [isScroll]);

  function hasScrolled() {
    let st = document.documentElement.scrollTop;
    if (Math.abs(scrollPosition - st) <= delta) {
      return;
    }
    if (st > scrollPosition && st > 64) {
      setIsUp(true);
    } else {
      setIsUp(false);
    }
    setScrollPosition(st);
  }
	*/

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
