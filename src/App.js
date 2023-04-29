import "./App.css";
// import HookEffectOne from "./components/useEffect/HookEffectOne";
import { Routes, Route } from "react-router-dom";
import Home from "./components/react_route/Home";
import About from "./components/react_route/About";
import OrderSummary from "./components/react_route/OrderSummary";
import NoMatch from "./components/react_route/NoMatch";

function App() {
  return (
    <div className="App">
      {/* <HookEffectOne /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
