import React, { useRef, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default App;
