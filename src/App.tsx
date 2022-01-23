import React, { useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MakeCoffee from "./components/makeCoffee/makeCoffee";
import OrderCoffee from "./components/orderCoffee/orderCoffee";

function App() {
  const [isOrder, setIsOrder] = useState(false);
  const [order, setOrder] = useState<CoffeeOrder | undefined>();
  function receiveOrder(coffee: CoffeeOrder) {
    setIsOrder(true);
    setOrder(coffee);
  }
  function goHome() {
    setIsOrder(false);
  }

  return (
    <div className={styles.container}>
      <Header />
      {!isOrder ? (
        <OrderCoffee receiveOrder={receiveOrder} /> //
      ) : (
        <MakeCoffee order={order} goHome={goHome} />
      )}
    </div>
  );
}

export default App;
