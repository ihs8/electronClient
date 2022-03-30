import { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
  const [sku, setsku] = useState("");
  const [product_name, setproductName] = useState("");
  const [price, setprice] = useState("");
  const [qty, setqty] = useState("");
  const [newprice, setnewprice] = useState("");
  const [newqty, setnewqty] = useState("");

const updateProduct = (ID) => {
  axios.put('http://localhost:5010/update_product/${ID}', {
    
    price:newprice,
    qty:newqty
    }
    )
}


  const addproduct = () => {
    axios.post('http://localhost:5010/add_product',{
        sku:sku,
        product_name:product_name, 
        price:price, 
        qty:qty

    });
    
  }
  const [productList, setproductList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_products').then((response) => {
    setproductList(response.data);
    })
  })
  const deleteProduct = (ID) => {
    axios.delete('http://localhost:5010/delete_product/${ID}')
  };
  return (
    <div className="App">
    <h1>CRUD APP For Products</h1>
    <label>SKU</label>
    <input type="text" onChange={(event)=> {
      setsku(event.target.value);
    }}></input>

<label>Product Name</label>
    <input type="text" onChange={(event)=> {
      setproductName(event.target.value);
    }}></input>

<label>PRICE</label>
    <input type="number" onChange={(event)=> {
      setprice(event.target.value);
    }}></input>
    <label>Quantity</label>
    <input type="number" onChange={(event)=> {
      setqty(event.target.value);
    }}></input>
    

    <button onClick={addproduct}>Add Product</button>

 <h2>Product list</h2>
 {productList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.sku}
     </h1>
     <h1>
     {val.product_name}
     </h1>
     <h1>
     {val.price}
     </h1>
     <h1>
     {val.qty}
     </h1>
     
     <input type="number" placeholder='New Quantity...' onChange={(event)=> {
      setnewqty(event.target.value);
    }}></input> <input type="qty" placeholder='New price...' onChange={(event)=> {
        setnewprice(event.target.value);
      }}></input>

     <button onClick={() => updateProduct(val.sku)}>Update</button>
     <button onClick={() => deleteProduct(val.sku)}>Delete</button>
     </div>)
   }
 )}
    </div>
  );
}
export default Product;