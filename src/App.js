import "./App.css";
import "../src/components/CSS/Homepage.css";
import "../src/components/CSS/Details.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Pages/Homepage/Homepage";
import Details from "./components/Pages/Product Page/Details";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "./components/Pages/Cart/Cart";
import Myac from "./components/Pages/Account/Myac";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/ac" element={<Myac/>}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
