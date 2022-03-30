import { useEffect, useState } from 'react';
import axios from 'axios';

function Attribute() {
  const [attribute_id, setattributeID] = useState("");
  const [attributeName, setattributename] = useState("");
  const [status, setstatus] = useState("");
  const [newattributename,setnewattributename] = useState("");
  const [newstatus,setnewstatus] = useState("");


const updateAttribute = (ID) => {
  axios.put('http://localhost:5010/update_attribute/${ID}', {
    attribute_name:newattributename,
    status:newstatus

    
    },
    )
}


  const addattribute = () => {
    axios.post('http://localhost:5010/add_attribute',{
        attribute_ID:attribute_id,
        attribute_name:attributeName, 
        status:status

    });
    
  }
  const [attributeList, setattributeList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_attributes').then((response) => {
    setattributeList(response.data);
    })
  })
  const deleteAttribute = (ID) => {
    axios.delete('http://localhost:5010/delete_attribute/${ID}')
  };
  return (
    <div className="App">
    <h1>CRUD APP For attributes</h1>
    <label>attribute ID</label>
    <input type="text" onChange={(event)=> {
      setattributeID(event.target.value);
    }}></input>

<label>attribute Name</label>
    <input type="text" onChange={(event)=> {
      setattributename(event.target.value);
    }}></input>

<label>status</label>
    <input type="text" onChange={(event)=> {
      setstatus(event.target.value);
    }}></input>
    

    <button onClick={addattribute}>Add User</button>

 <h2>attribute list</h2>
 {attributeList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.attribute_name}
     </h1>
     <h1>
     {val.attribute_ID}
     </h1>
     <h1>
     {val.status}
     </h1>
    
     <input type="text" placeholder='New name...' onChange={(event)=> {
      setnewattributename(event.target.value);
    }}></input> <input type="text" placeholder='New status...' onChange={(event)=> {
        setnewstatus(event.target.value);
      }}></input>
     <button onClick={() => updateAttribute(val.attribute_ID)}>Update</button>
     <button onClick={() => deleteAttribute(val.attribute_ID)}>Delete</button>
     </div>)
   }
 )}
    </div>
  );
}
export default Attribute;