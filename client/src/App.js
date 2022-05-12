
import { Home } from "./components/Home/Home";
import { Switch, Route } from "react-router-dom"
import { MyCart } from "./components/Cart/MyCart";
import { AboutProduct } from "./components/AboutProduct/AboutProduct";
import { Login } from "./components/login/Login";
import { SuplierLogin } from "./components/Supplier/SuplierLogin";
import { Dashboard } from "./components/Supplier/Dashboard";
function App() {
  return (
    <div className="App">
      <Switch>
      

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout/:task">
          <MyCart />
        </Route>
        <Route path="/aboutproduct/:id">
          <AboutProduct />
        </Route>

        <Route exact path="/supplierlogin">
          <SuplierLogin />
        </Route>
        <Route path="/dashboard">

        <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
