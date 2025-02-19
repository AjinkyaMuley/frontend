import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Website
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Categories from './Components/Categories';
import CategoryProducts from './Components/CategoryProducts';
import AllProducts from './Components/AllProducts';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Components/Checkout';
import ConfirmOrder from './Components/ConfirmOrder';
import OrderSuccess from './Components/OrderSuccess';
import OrderFailure from './Components/OrderFailure';

// Customer Panel
import Register from './Components/Customer/Register';
import Login from './Components/Customer/Login';
import Logout from './Components/Customer/Logout';
import Dashboard from './Components/Customer/Dashboard';
import Orders from './Components/Customer/Orders';
import Wishlist from './Components/Customer/Wishlist';
import Profile from './Components/Customer/Profile';
import ChangePassword from './Components/Customer/ChangePassword';
import AddressList from './Components/Customer/AdressList';
import AddAddress from './Components/Customer/AddAddress';

// Seller Panel
import SellerLogin from './Components/Seller/SellerLogin';
import SellerRegister from './Components/Seller/SellerRegister';
import SellerDashboard from './Components/Seller/SellerDashboard';
import SellerProducts from './Components/Seller/SellerProducts';
import AddProduct from './Components/Seller/AddProduct';
import SellerOrders from './Components/Seller/SellerOrders';
import Customers from './Components/Seller/Customers';
import Reports from './Components/Seller/Reports';
import SellerProfile from './Components/Seller/SellerProfile';
import SellerChangePassword from './Components/Seller/SellerChangePassword';
import TagProducts from './Components/TagProducts';
import { CartContext } from './Context';
import { useState } from 'react';

const checkCart = localStorage.getItem('cartData')

function App() {
  const [cartData,setCartData] = useState(JSON.parse(checkCart))
  return (
    <CartContext.Provider value={{cartData,setCartData}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts />} />
        <Route path='/products/:tag' element={<TagProducts />} />
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/confirm-order' element={<ConfirmOrder />} />
        <Route path='/order/success' element={<OrderSuccess />} />
        <Route path='/order/failure' element={<OrderFailure />} />
        {/* Customer Routes */}
        <Route path='/customer/register' element={<Register />} />
        <Route path='/customer/login' element={<Login />} />
        <Route path='/customer/logout' element={<Logout />} />
        <Route path='/customer/dashboard' element={<Dashboard />} />
        <Route path='/customer/orders' element={<Orders />} />
        <Route path='/customer/wishlist' element={<Wishlist />} />
        <Route path='/customer/profile' element={<Profile />} />
        <Route path='/customer/change-password' element={<ChangePassword />} />
        <Route path='/customer/addresses' element={<AddressList />} />
        <Route path='/customer/add-address' element={<AddAddress />} />
        {/* Seller Routes */}
        <Route path='/seller/login' element={<SellerLogin />} />
        <Route path='/seller/register' element={<SellerRegister />} />
        <Route path='/seller/dashboard' element={<SellerDashboard />} />
        <Route path='/seller/products' element={<SellerProducts />} />
        <Route path='/seller/add-product' element={<AddProduct />} />
        <Route path='/seller/orders' element={<SellerOrders />} />
        <Route path='/seller/customers' element={<Customers />} />
        <Route path='/seller/reports' element={<Reports />} />
        <Route path='/seller/profile' element={<SellerProfile />} />
        <Route path='/seller/change-password' element={<SellerChangePassword />} />
      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
