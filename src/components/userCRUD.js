
import { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
  const [user_id, setuserID] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState("");
  const [newusername, setnewusername] = useState("");
  const [newphone, setnewphone] = useState("");
  const [newpassword, setnewpassword] = useState("");

const updateUser = (ID) => {
  axios.put('http://localhost:5010/update_user/${ID}', {
    newusername:newusername,
    newpassword:newpassword,
    newphone:newphone,

    
    },
    )
}


  const adduser = () => {
    axios.post('http://localhost:5010/add_user',{
        user_id:user_id,
        username:username, 
        password:password, 
        phone:phone, 
        firstname:firstname,
        lastname:lastname,
        gender:gender

    });
    
  }
  const [userList, setuserList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_users').then((response) => {
    setuserList(response.data);
    })
  })
  const deleteUser = (ID) => {
    axios.delete('http://localhost:5010/delete_user/${ID}')
  };
  return (
    <div className="App">
    <h1>CRUD APP For Users</h1>
    <label>User ID</label>
    <input type="text" onChange={(event)=> {
      setuserID(event.target.value);
    }}></input>

<label>username</label>
    <input type="text" onChange={(event)=> {
      setusername(event.target.value);
    }}></input>

<label>password</label>
    <input type="password" onChange={(event)=> {
      setpassword(event.target.value);
    }}></input>
    <label>phone</label>
    <input type="number" onChange={(event)=> {
      setphone(event.target.value);
    }}></input>
    <label>firstname</label>
    <input type="text" onChange={(event)=> {
      setfirstname(event.target.value);
    }}></input>
    <label>lastname</label>
    <input type="text" onChange={(event)=> {
      setlastname(event.target.value);
    }}></input>
    <label>gender</label>
    <input type="text" onChange={(event)=> {
      setgender(event.target.value);
    }}></input>

    <button onClick={adduser}>Add User</button>

 <h2>User list</h2>
 {userList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.firstname + val.lastname}
     </h1>
     <h1>
     {val.gender}
     </h1>
     <h1>
     {val.phone}
     </h1>
     <h1>
     {val.username}
     </h1>
     
     <h1>{val.user_id}</h1>
     <input type="text" placeholder='New username...' onChange={(event)=> {
      setnewusername(event.target.value);
    }}></input> <input type="password" placeholder='New password...' onChange={(event)=> {
        setnewpassword(event.target.value);
      }}></input>
      <input type="number" placeholder='New phone...' onChange={(event)=> {
      setnewphone(event.target.value);
    }}></input>
     <button onClick={() => updateUser(val.user_id)}>Update</button>
     <button onClick={() => deleteUser(val.user_id)}>Delete</button>
     </div>)
   }
 )}
    </div>
  );
}
export default User;