import Products from "./components/pages/Products";
import Welcome from "./components/pages/Welcome";
import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import './App.css';
function App() {
  return (
    <div>
      <MainHeader/>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
    </div>
  );
}

export default App;
