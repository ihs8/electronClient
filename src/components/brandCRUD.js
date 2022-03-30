import { useEffect, useState } from 'react';
import axios from 'axios';

function Brand() {
  const [brandID, setbrandID] = useState("");
  const [brandName, setbrandName] = useState("");
  const [newBrandName, setnewBrandName] = useState("");
const updateBrand = (ID) => {
  axios.put('http://localhost:5010/update_brand/${ID}',{
    newBrandName:newBrandName,
  })
}


  const addBrand = () => {
    axios.post('http://localhost:5010/add_brand',{
      brandID:brandID,
      brandName:brandName    
    });
    
  }
  const [brandList, setbrandList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_brands').then((response) => {
    setbrandList(response.data);
    })
  })
  const deleteBrand = (ID) => {
    axios.delete('http://localhost:5010/delete_brand/${ID}')
  };
  return (
    <div className="App">
    <h1>CRUD APP For Brands</h1>
    <label>Brand ID</label>
    <input type="text" onChange={(event)=> {
      setbrandID(event.target.value);
    }}></input>
    <label>Brand Name</label>
    <input type="text" onChange={(event)=> {
      setbrandName(event.target.value);
    }} ></input>
    <button onClick={addBrand}>Add Brand</button>

 <h2>brand list</h2>
 {brandList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.brand_name}
     </h1>
     <h1>{val.brand_ID}</h1>
     <input type="text" placeholder='New Name...' onChange={(event)=> {
      setnewBrandName(event.target.value);
    }}></input>
     <button onClick={() => updateBrand(val.brand_ID)}>Update</button>
     <button onClick={() => deleteBrand(val.brand_ID)}>Delete</button>
     </div>)
   }
 )}
    </div>
  );
}
export default Brand;