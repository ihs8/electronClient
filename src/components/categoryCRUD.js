import { useEffect, useState } from 'react';
import axios from 'axios';

function Category() {
  const [CategoryID, setCategoryID] = useState("");
  const [CategoryName, setCategoryName] = useState("");
  const [newCategoryName, setnewCategoryName] = useState("");
const updateCategory = (ID) => {
  axios.put('http://localhost:5010/update_category/${ID}',{
    newCategoryName:newCategoryName,
  })
}


  const addCategory = () => {
    axios.post('http://localhost:5010/add_category',{
      CategoryID:CategoryID,
      CategoryName:CategoryName    
    });
    
  }
  const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_categorys').then((response) => {
    setCategoryList(response.data);
    })
  })
  const deleteCategory = (ID) => {
    axios.delete('http://localhost:5010/delete_category/${ID}')
  };
  return (
    <div className="App">
    <h1>CRUD APP For Categorys</h1>
    <label>Category ID</label>
    <input type="text" onChange={(event)=> {
      setCategoryID(event.target.value);
    }}></input>
    <label>Category Name</label>
    <input type="text" onChange={(event)=> {
      setCategoryName(event.target.value);
    }} ></input>
    <button onClick={addCategory}>Add Category</button>

 <h2>Category list</h2>
 {CategoryList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.category_name}
     </h1>
     <h1>{val.category_ID}</h1>
     <input type="text" placeholder='New Name...' onChange={(event)=> {
      setnewCategoryName(event.target.value);
    }}></input>
     <button onClick={() => updateCategory(val.category_ID)}>Update</button>
     <button onClick={() => deleteCategory(val.category_ID)}>Delete</button>
     </div>)
   }
 )}
    </div>
  );
}
export default Category;