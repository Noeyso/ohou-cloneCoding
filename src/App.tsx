import React, { useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import OrderCoffee from "./components/orderCoffee/orderCoffee";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <OrderCoffee />
    </div>
  );
}

export default App;
