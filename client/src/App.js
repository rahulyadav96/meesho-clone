
import { Home } from "./components/Home/Home";
import { Switch, Route } from "react-router-dom"
import { MyCart } from "./components/Cart/MyCart";
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
      </Switch>
    </div>
  );
}

export default App;
