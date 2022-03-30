import { useEffect, useState } from 'react';
import axios from 'axios';

function Group() {
  const [groupeID, setgroupeID] = useState("");
  const [groupeName, setgroupeName] = useState("");
  const [newgroupeName, setnewgroupeName] = useState("");
const updateGroupe = (ID) => {
  axios.put('http://localhost:5010/update_groupe/${ID}',{
    newgroupeName:newgroupeName,
  })
}


  const addGroupe = () => {
    axios.post('http://localhost:5010/add_groupe',{
      groupeID:groupeID,
      groupeName:groupeName    
    });
    
  }
  const [groupeList, setgroupeList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_groups').then((response) => {
    setgroupeList(response.data);
    })
  })
  const deleteGroupe = (ID) => {
    axios.delete('http://localhost:5010/delete_groupe/${ID}')
  };
  return (
    <div className="App">
    <h1>CRUD APP For groups</h1>
    <label>group ID</label>
    <input type="text" onChange={(event)=> {
      setgroupeID(event.target.value);
    }}></input>
    <label>Group Name</label>
    <input type="text" onChange={(event)=> {
      setgroupeName(event.target.value);
    }} ></input>
    <button onClick={addGroupe}>Add Groupe</button>

 <h2>group list</h2>
 {groupeList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.groupe_name}
     </h1>
     <h1>{val.groupe_ID}</h1>
     <input type="text" placeholder='New Name...' onChange={(event)=> {
      setnewgroupeName(event.target.value);
    }}></input>
     <button onClick={() => updateGroupe(val.groupe_ID)}>Update</button>
     <button onClick={() => deleteGroupe(val.groupe_ID)}>Delete</button>
     </div>)
   }
 )}
    </div>
  );
}
export default Group;