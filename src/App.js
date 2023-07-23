import "./App.css";
import "../src/components/CSS/Homepage.css";
import "../src/components/CSS/Details.css";
import "../src/components/CSS/Reviews.css";
import "../src/components/CSS/Ratings.css";
import "../src/components/CSS/Cart.css";
import "../src/components/CSS/Help.css";
import "../src/components/CSS/Category.css";
import "../src/components/CSS/Search.css";
import "../src/components/CSS/Footer.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Pages/Homepage/Homepage";
import Details from "./components/Pages/Product Page/Details";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "./components/Pages/Cart/Cart";
import Myac from "./components/Pages/Account/Myac";
import Help from "./components/Pages/Help/Help";
import Resultpage from "./components/Pages/Search Results/Resultpage";
import Footer from "./components/footer/Footer";
import Productcontext from "./context/porductApi/Productcontext";
import CartContext from "./context/cartApi/CartContext";

function App() {
  return (
    <>
      <Productcontext>
        <CartContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/ac" element={<Myac />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/details" element={<Details />}></Route>
            <Route exact path="/help" element={<Help />}></Route>
            <Route exact path="/search" element={<Resultpage />}></Route>
            <Route exact path="/*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartContext>
      </Productcontext>
    </>
  );
}

export default App;
