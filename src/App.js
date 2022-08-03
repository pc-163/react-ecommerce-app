import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Page/todo.js";
import Header from "./Header/header.js";
//import Home from "./Page/home.js";
import Profile from "./Page/Profile/Profile.js";
import image from './front.jpg';
import Product from "./Page/Products/product";
import Caluculator from './Page/calculator.js';
import Footer from "./Header/footer.js";
import Cart from "./Page/Products/cart";
import NotFound from './Page/404'
import SingleProduct from './Page/Products/single-product'
//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
function App() {

  //P1
  const details = {
    Name: 'Prakash Chand',
    CurrentStatus: 'React Student',
    Location:  'Mohali 8B',
    Company: 'SICS-CODE CAMP',
    Image: 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    SocialMedia: {
      Github: 'pc-163',
      LinkedIn: 'pc163',
      Twitter: 'pc_163'
    }
   

  }

  return (
    <>
    <Header image={image}/>
    
    <Routes>
    <Route path="/" element={<Product />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          {  /*<Route path="todo" element={<Todo />} />  */}
          <Route path="profile" element={<Profile details={details} image={image} />} />
          {  /* <Route path="caluculator" element={<Caluculator />} />*/}
          <Route path="cart" element={<Cart />} />
         <Route path="*" element={<NotFound />} />
    </Routes>
   
    <Footer/>
    </>
  );
}


export default App;

