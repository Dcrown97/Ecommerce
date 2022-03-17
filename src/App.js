import './App.css';
import "./Day1.css";
import "./Homepage.css";
import "./Faq.css";
import Pages from './Screens/Pages';
import Login from './Screens/Login';
import OrderCompleted from './Screens/OrderCompleted';
import ShippingInfo from './Screens/ShippingInfo';
import Register from './Screens/Register';
import ShopList from './Screens/ShopList';
import ShoppingCart from './Screens/ShoppingCart';
import ProductDetails from './Screens/ProductDetails';
import Homepage from './Screens/Homepage';
import BlogPage from './Screens/BlogPage';
import Error from './Screens/Error';
import Faq from './Screens/Faq';
import SingleBlog from './Screens/SingleBlog';
import About from './Screens/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './Context';
import { useState } from 'react';
import Contact from './Screens/Contact';
import { CartProvider } from 'react-use-cart';
import WishList from './Screens/WishList';

function App() {

  const [user, setUser] = useState(0);

  return (

    <UserContext.Provider value={{ user, setUser }}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-completed" element={<OrderCompleted />} />
            <Route path="/shop" element={<ShopList />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/register" element={<Register />} />
            <Route path="/error" element={<Error />} />
            <Route path="/proceed" element={<ShippingInfo />} />
            {/* <Route path="/shipping-info" element={<ShippingInfo />} /> */}
            <Route path="/faq" element={<Faq />} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Pages />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/wish_list" element={<WishList />} />
            <Route path="/single-blog/:id" element={<SingleBlog />} />
            <Route path="/single-blog" element={<SingleBlog />} />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserContext.Provider>

  );
}

export default App;
