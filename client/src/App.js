
import { Home } from "./components/Home/Home";
import { Switch, Route } from "react-router-dom"
import { MyCart } from "./components/Cart/MyCart";
import { AboutProduct } from "./components/AboutProduct/AboutProduct";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mycart">
          <MyCart />
        </Route>
        <Route path="/aboutproduct/:id">
          <AboutProduct />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
