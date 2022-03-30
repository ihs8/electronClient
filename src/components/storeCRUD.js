import { useEffect, useState } from 'react';
import axios from 'axios';

function Store() {
  const [storeID, setstoreID] = useState("");
  const [storeName, setstoreName] = useState("");
  const [newstoreName, setnewstoreName] = useState("");
const updateStore = (ID) => {
  axios.put('http://localhost:5010/update_store/${ID}',{
    newstoreName:newstoreName,
  })
}


  const addstore = () => {
    axios.post('http://localhost:5010/add_store',{
        storeID:storeID,
        storeName:storeName    
    });
    
  }
  const [storeList, setstoreList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_stores').then((response) => {
    setstoreList(response.data);
    })
  })
  const deleteStore = (ID) => {
    axios.delete('http://localhost:5010/delete_store/${ID}')
  };
  return (
    <div className="App">
    <h1>CRUD APP For stores</h1>
    <label>store ID</label>
    <input type="text" onChange={(event)=> {
      setstoreID(event.target.value);
    }}></input>
    <label>store Name</label>
    <input type="text" onChange={(event)=> {
      setstoreName(event.target.value);
    }} ></input>
    <button onClick={addstore}>Add store</button>

 <h2>store list</h2>
 {storeList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.store_name}
     </h1>
     <h1>{val.store_ID}</h1>
     <input type="text" placeholder='New Name...' onChange={(event)=> {
      setnewstoreName(event.target.value);
    }}></input>
     <button onClick={() => updateStore(val.store_ID)}>Update</button>
     <button onClick={() => deleteStore(val.store_ID)}>Delete</button>
     </div>)
   }
 )}
    </div>
  );
}
export default Store;