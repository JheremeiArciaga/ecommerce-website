import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Login from "./pages/login";
import ShopContext from "./components/shopcontext";
import Details from "./pages/details";
import Checkout from "./pages/checkout";
import Signup from "./pages/signup";
import Forgotpassword from "./pages/forgotpassword";
import Tooltip from "./tooltip";
import PageNotFound from "./pages/pageNotFound";

function App() {
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="men" element={<Men />} />
              <Route path="women" element={<Women />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="forgotpasword" element={<Forgotpassword />} />
              <Route path="details" element={<Details />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>
      <div className="App">
        <Tooltip></Tooltip>
      </div>
    </>
  );
}

export default App;
