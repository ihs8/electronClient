import './App.css';
import Attribute from './components/attributeCRUD';
import Brand from "./components/brandCRUD";
import Category from "./components/categoryCRUD";
import Groupe from './components/groupCRUD';
import Order from './components/orderCRUD';
import Product from './components/productCRUD';
import Store from './components/storeCRUD';
import User from './components/userCRUD';
import Nav from './components/nav';
import {Routes,Route} from "react-router-dom";
import Company from "./components/companyCRUD";
import AddDriver from "./components/driverCRUD";
import Login from './components/Login';
function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/*' element={<Nav/>}></Route>
      <Route path='/login' element={<Login/>}/>
        <Route path='/AddDriver' element={<AddDriver/>}/>
          <Route path='/brand' element={<Brand/>}/>
           <Route path='/category' element={<Category/>}/>
          <Route path='/company' element={<Company/>}/>
         <Route path='/group' element={<Groupe/>}/>
         <Route path='/order' element={<Order/>}/>
         <Route path='/product' element={<Product/>}/>
          <Route path='/store' element={<Store/>}/>
         <Route path='/user' element={<User/>}/>
         <Route path='/attribute' element={<Attribute/>}/>

      </Routes>
  
    </div>
  );
}

export default App;
