import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Community from "./page/community/home/community";
import Footer from "./components/footer/footer";
import Store from "./page/store/store";
import Interior from "./page/interior/interior";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.page}>
          <Switch>
            <Route exact path="/"><Community /></Route>
            <Route path="/store"><Store /></Route>
            <Route path="/interior"><Interior /></Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
